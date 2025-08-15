from flask import Blueprint, jsonify, request
from sqlalchemy.orm import joinedload
from app.extensions import db
from app.models.menu import Item, Size, Category, Ingredient, ExtraOption

menu_v1_bp = Blueprint("menu_v1", __name__, url_prefix="/api/v1/menu")


@menu_v1_bp.get("/sizes")
def get_sizes():
    """Get all available sizes"""
    sizes = db.session.query(Size).order_by(Size.id).all()
    return jsonify(
        [
            {
                "id": s.id,
                "name": s.name,
                "multiplier": float(s.multiplier),
                "diameter": s.diameter,
            }
            for s in sizes
        ]
    )


@menu_v1_bp.get("/items")
def get_items():
    """
    Returns all items, optionally filtered by category.
    """
    category_name = request.args.get("category")
    q = db.session.query(Item).options(
        joinedload(Item.category),
        joinedload(Item.ingredients),
    )
    if category_name:
        q = q.join(Category).filter(Category.name.ilike(category_name))

    items = q.order_by(Item.id).all()
    return jsonify(
        [
            {
                "id": it.id,
                "name": it.name,
                "description": it.description,
                "basePrice": float(it.price),
                "image": it.image_path,
                "ingredients": [ing.id for ing in it.ingredients],
                "category": it.category.name.lower() if it.category else None,
            }
            for it in items
        ]
    )


@menu_v1_bp.get("/items/<int:item_id>")
def get_item_detail(item_id: int):
    """
    Item details
    """
    it = (
        db.session.query(Item)
        .options(joinedload(Item.category), joinedload(Item.ingredients))
        .filter(Item.id == item_id)
        .first()
    )
    if not it:
        return jsonify({"error": "Item not found"}), 404

    extras = (
        db.session.query(ExtraOption).options(joinedload(ExtraOption.ingredient)).all()
    )

    return jsonify(
        {
            "id": it.id,
            "name": it.name,
            "price": float(it.price),
            "image_path": it.image_path,
            "category": (
                {"id": it.category.id, "name": it.category.name}
                if it.category
                else None
            ),
            "ingredients": [{"id": ing.id, "name": ing.name} for ing in it.ingredients],
            "available_extras": [
                {"id": e.id, "name": e.ingredient.name, "price": float(e.extra_price)}
                for e in extras
            ],
        }
    )


@menu_v1_bp.get("/ingredients")
def get_ingredients():
    """Get all available ingredients"""
    ingredients = db.session.query(Ingredient).order_by(Ingredient.name).all()
    return jsonify([{"id": ing.id, "name": ing.name} for ing in ingredients])


@menu_v1_bp.get("/extras")
def get_extras():
    """Get all available extra options"""
    extras = (
        db.session.query(ExtraOption).options(joinedload(ExtraOption.ingredient)).all()
    )
    return jsonify(
        [
            {
                "id": ex.id,
                "name": ex.ingredient.name,
                "price": float(ex.extra_price),
                "description": ex.description,
            }
            for ex in extras
        ]
    )


@menu_v1_bp.get("/categories")
def get_categories():
    """
    Get all available categories.
    Pass ?include_items=true to include items inside each category.
    """
    include_items = request.args.get("include_items", "false").lower() == "true"

    q = db.session.query(Category)
    if include_items:
        q = q.options(joinedload(Category.items))

    categories = q.order_by(Category.id).all()

    result = []
    for c in categories:
        cat = {"id": c.id, "name": c.name}
        if include_items:
            cat["items"] = [
                {
                    "id": it.id,
                    "name": it.name,
                    "description": it.description,
                    "basePrice": float(it.price),
                    "image": it.image_path,
                }
                for it in c.items
            ]
        result.append(cat)

    return jsonify(result)
