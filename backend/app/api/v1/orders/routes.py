from decimal import Decimal
from flask import Blueprint, jsonify, request
from sqlalchemy.orm import joinedload

from app.extensions import db
from app.models.menu import Item, Size, ExtraOption
from app.models.orders import Order, OrderItem, OrderItemExtra

orders_v1_bp = Blueprint("orders_v1", __name__, url_prefix="/api/v1/orders")


def _serialize_order(order: Order):
    # Prefetch names for items and sizes
    item_ids = [oi.item_id for oi in order.items]
    size_ids = [oi.size_id for oi in order.items]
    item_name_by_id = {}
    size_info_by_id = {}

    if item_ids:
        rows = db.session.query(Item.id, Item.name).filter(Item.id.in_(item_ids)).all()
        item_name_by_id = {iid: name for (iid, name) in rows}

    if size_ids:
        srows = (
            db.session.query(Size.id, Size.name, Size.multiplier)
            .filter(Size.id.in_(size_ids))
            .all()
        )
        size_info_by_id = {
            sid: {"name": name, "multiplier": float(mult)}
            for (sid, name, mult) in srows
        }

    items_total = order.items_total

    return {
        "id": order.id,
        "status": order.status,
        "created_at": order.created_at.isoformat(),
        "items_total": float(items_total),
        "delivery_fee": float(order.delivery_fee or 0),
        "tax": float(order.tax or 0),
        "total": float(order.total),
        "items": [
            {
                "id": oi.id,
                "item_id": oi.item_id,
                "item_name": item_name_by_id.get(oi.item_id),
                "size_id": oi.size_id,
                "size": size_info_by_id.get(oi.size_id),
                "quantity": oi.quantity,
                "base_price_at_purchase": float(oi.base_price_at_purchase),
                "extras": [
                    {
                        "extra_option_id": e.extra_option_id,
                        "extra_price_at_purchase": float(e.extra_price_at_purchase),
                    }
                    for e in oi.extras
                ],
                "line_price": float(oi.line_price),
                "subtotal": float(oi.subtotal),
            }
            for oi in order.items
        ],
    }


@orders_v1_bp.post("")
@orders_v1_bp.post("")
def create_order():
    """
    Create one/multiple orders.
    """
    data = request.get_json()

    # normalize into list
    if isinstance(data, dict):
        orders_payload = [data]
    elif isinstance(data, list):
        orders_payload = data
    else:
        return jsonify({"error": "Invalid payload"}), 400

    created_orders = []

    try:
        for order_data in orders_payload:
            if "items" not in order_data or not isinstance(order_data["items"], list):
                return jsonify({"error": "Each order must have items"}), 400

            delivery_fee = Decimal(str(order_data.get("delivery_fee", 0)))
            tax = Decimal(str(order_data.get("tax", 0)))

            order = Order(delivery_fee=delivery_fee, tax=tax)
            db.session.add(order)

            for item_data in order_data["items"]:
                item_id = item_data.get("item_id")
                size_id = item_data.get("size_id")
                quantity = int(item_data.get("quantity", 1))

                if not item_id or not size_id:
                    return jsonify({"error": "item_id and size_id required"}), 400
                if quantity <= 0:
                    return jsonify({"error": "quantity must be > 0"}), 400

                item = db.session.query(Item).filter(Item.id == item_id).first()
                size = db.session.query(Size).filter(Size.id == size_id).first()
                if not item or not size:
                    return jsonify({"error": "Invalid item/size"}), 404

                order_item = OrderItem(
                    order=order,
                    item_id=item_id,
                    size_id=size_id,
                    quantity=quantity,
                    base_price_at_purchase=item.price,
                )
                db.session.add(order_item)

                extras_in = item_data.get("extras", [])
                normalized_extra_ids = []
                for ex in extras_in:
                    if isinstance(ex, dict):
                        ex_id = ex.get("extra_option_id") or ex.get("id")
                        if ex_id:
                            normalized_extra_ids.append(ex_id)
                    else:
                        normalized_extra_ids.append(ex)

                for ex_id in normalized_extra_ids:
                    extra = db.session.query(ExtraOption).filter_by(id=ex_id).first()
                    if not extra:
                        return jsonify(
                            {"error": f"Extra option {ex_id} not found"}
                        ), 404
                    db.session.add(
                        OrderItemExtra(
                            order_item=order_item,
                            extra_option_id=ex_id,
                            extra_price_at_purchase=extra.extra_price,
                        )
                    )

            created_orders.append(order)

        db.session.commit()

        return jsonify(
            [
                {
                    "order_id": o.id,
                    "status": o.status,
                    "created_at": o.created_at.isoformat(),
                    "total": float(o.total),
                }
                for o in created_orders
            ]
        ), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Failed to create orders: {str(e)}"}), 500


@orders_v1_bp.get("")
def list_orders():
    """
    List all orders with full pricing breakdown with pagination
    """
    try:
        page = max(1, int(request.args.get("page", 1)))
        page_size = min(100, max(1, int(request.args.get("page_size", 20))))
    except ValueError:
        return jsonify({"error": "Invalid page or page_size"}), 400

    q = (
        db.session.query(Order)
        .options(
            joinedload(Order.items).joinedload(OrderItem.extras),
            joinedload(Order.items).joinedload(OrderItem.size),
        )
        .order_by(Order.id.desc())
    )

    total_count = q.count()
    orders = q.offset((page - 1) * page_size).limit(page_size).all()

    return jsonify(
        {
            "page": page,
            "page_size": page_size,
            "total": total_count,
            "orders": [_serialize_order(o) for o in orders],
        }
    )


@orders_v1_bp.get("/<int:order_id>")
def get_order(order_id: int):
    order = (
        db.session.query(Order)
        .options(
            joinedload(Order.items).joinedload(OrderItem.extras),
            joinedload(Order.items).joinedload(OrderItem.size),
        )
        .filter(Order.id == order_id)
        .first()
    )
    if not order:
        return jsonify({"error": "Order not found"}), 404
    return jsonify(_serialize_order(order))


@orders_v1_bp.delete("")
def delete_all_orders():
    """
    Delete ALL orders
    Safety latch: require ?confirm=true
    """
    if request.args.get("confirm") != "true":
        return jsonify(
            {
                "error": "This will delete ALL orders. Re-run with ?confirm=true to proceed."
            }
        ), 400

    # Load instances so ORM cascades run (don't use bulk .delete()).
    orders = db.session.query(Order).all()
    deleted = len(orders)

    for o in orders:
        db.session.delete(o)

    db.session.commit()
    return jsonify({"deleted": deleted}), 200
