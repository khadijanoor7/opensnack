from sqlalchemy import (
    Column,
    Integer,
    String,
    Numeric,
    ForeignKey,
    Text,
    CheckConstraint,
)
from sqlalchemy.orm import relationship
from app.extensions import db


class Ingredient(db.Model):
    __tablename__ = "ingredient"
    id = Column(Integer, primary_key=True)
    name = Column(String(80), nullable=False, unique=True)


class Size(db.Model):
    __tablename__ = "size"
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False, unique=True)
    multiplier = Column(Numeric(3, 2), nullable=False)
    diameter = Column(String(20), nullable=False)

    __table_args__ = (CheckConstraint("multiplier > 0", name="ck_size_multiplier_pos"),)


class Category(db.Model):
    __tablename__ = "category"
    id = Column(Integer, primary_key=True)
    name = Column(String(50), nullable=False, unique=True)
    items = relationship("Item", back_populates="category")


class Item(db.Model):
    __tablename__ = "item"
    id = Column(Integer, primary_key=True)
    name = Column(String(80), nullable=False, unique=True)
    description = Column(Text, nullable=True)
    price = Column(Numeric(6, 2), nullable=False)
    image_path = Column(Text)
    category_id = Column(ForeignKey("category.id", ondelete="SET NULL"), nullable=True)

    category = relationship("Category", back_populates="items")
    ingredients = relationship(
        "Ingredient",
        secondary="item_ingredient",
        backref="items",
        lazy="joined",
    )

    __table_args__ = (CheckConstraint("price >= 0", name="ck_item_price_nonneg"),)


class ItemIngredient(db.Model):
    __tablename__ = "item_ingredient"
    item_id = Column(ForeignKey("item.id", ondelete="CASCADE"), primary_key=True)
    ingredient_id = Column(
        ForeignKey("ingredient.id", ondelete="RESTRICT"), primary_key=True
    )


class ExtraOption(db.Model):
    __tablename__ = "extra_option"
    id = Column(Integer, primary_key=True)
    ingredient_id = Column(
        ForeignKey("ingredient.id", ondelete="RESTRICT"), nullable=False, unique=True
    )
    description = Column(Text, nullable=True)
    extra_price = Column(Numeric(6, 2), nullable=False)

    ingredient = relationship("Ingredient")

    __table_args__ = (CheckConstraint("extra_price > 0", name="ck_extra_price_pos"),)
