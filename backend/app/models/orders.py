from decimal import Decimal
from sqlalchemy import (
    Column,
    Integer,
    String,
    Numeric,
    DateTime,
    ForeignKey,
    CheckConstraint,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.extensions import db


class Order(db.Model):
    __tablename__ = "order"
    id = Column(Integer, primary_key=True)
    status = Column(String(20), nullable=False, default="pending")
    created_at = Column(
        DateTime(timezone=True), nullable=False, server_default=func.now()
    )

    delivery_fee = Column(Numeric(10, 2), nullable=False, default=Decimal("0.00"))
    tax = Column(Numeric(10, 2), nullable=False, default=Decimal("0.00"))

    items = relationship(
        "OrderItem", back_populates="order", cascade="all, delete-orphan"
    )

    @property
    def items_total(self) -> Decimal:
        return sum((item.subtotal for item in self.items), Decimal("0.00"))

    @property
    def total(self) -> Decimal:
        return (
            self.items_total
            + (self.delivery_fee or Decimal("0.00"))
            + (self.tax or Decimal("0.00"))
        )


class OrderItem(db.Model):
    __tablename__ = "order_item"
    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey("order.id", ondelete="CASCADE"), nullable=False)
    item_id = Column(ForeignKey("item.id", ondelete="RESTRICT"), nullable=False)
    size_id = Column(ForeignKey("size.id", ondelete="RESTRICT"), nullable=False)
    quantity = Column(Integer, nullable=False, default=1)
    base_price_at_purchase = Column(Numeric(10, 2), nullable=False)

    order = relationship("Order", back_populates="items")
    item = relationship("Item")
    size = relationship("Size")
    extras = relationship(
        "OrderItemExtra", back_populates="order_item", cascade="all, delete-orphan"
    )

    __table_args__ = (CheckConstraint("quantity > 0", name="ck_order_item_qty_pos"),)

    @property
    def extras_total(self) -> Decimal:
        return sum((e.extra_price_at_purchase for e in self.extras), Decimal("0.00"))

    @property
    def line_price(self) -> Decimal:
        return (self.base_price_at_purchase * self.size.multiplier) + self.extras_total

    @property
    def subtotal(self) -> Decimal:
        return self.line_price * self.quantity


class OrderItemExtra(db.Model):
    __tablename__ = "order_item_extra"
    order_item_id = Column(
        ForeignKey("order_item.id", ondelete="CASCADE"), primary_key=True
    )
    extra_option_id = Column(
        ForeignKey("extra_option.id", ondelete="RESTRICT"), primary_key=True
    )
    extra_price_at_purchase = Column(Numeric(10, 2), nullable=False)

    order_item = relationship("OrderItem", back_populates="extras")
    extra_option = relationship("ExtraOption")

    __table_args__ = (
        CheckConstraint("extra_price_at_purchase > 0", name="ck_extra_price_pos"),
    )
