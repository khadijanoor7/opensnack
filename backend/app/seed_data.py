from decimal import Decimal
from app.extensions import db
from app.models.menu import (
    Ingredient,
    Size,
    Category,
    Item,
    ItemIngredient,
    ExtraOption,
)


def seed_data():
    """Seed the database with sizes, ingredients, categories, items and extras."""

    sizes_data = [
        {"name": "Small", "multiplier": Decimal("1.00"), "diameter": '10"'},
        {"name": "Medium", "multiplier": Decimal("1.30"), "diameter": '12"'},
        {"name": "Large", "multiplier": Decimal("1.60"), "diameter": '14"'},
        {"name": "Extra Large", "multiplier": Decimal("2.00"), "diameter": '16"'},
    ]
    for s in sizes_data:
        size = Size.query.filter_by(name=s["name"]).first()
        if not size:
            db.session.add(Size(**s))

    ingredients_data = [
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Fresh Basil",
        "Pepperoni",
        "BBQ Sauce",
        "Grilled Chicken",
        "Red Onions",
        "Cilantro",
        "Mushrooms",
        "Artichokes",
        "Ham",
        "Black Olives",
        "Bell Peppers",
        "Yellow Onions",
        "Cherry Tomatoes",
        "Italian Sausage",
        "Bacon",
        "Pineapple",
        "Jalapeños",
        "Garlic",
        "Spinach",
    ]
    ingredient_by_name = {}
    for name in ingredients_data:
        ing = Ingredient.query.filter_by(name=name).first()
        if not ing:
            ing = Ingredient(name=name)
            db.session.add(ing)
            db.session.flush()
        ingredient_by_name[name] = ing

    categories_data = ["classic", "gourmet", "vegetarian", "meat"]
    category_by_name = {}
    for cname in categories_data:
        label = cname.title()
        cat = Category.query.filter_by(name=label).first()
        if not cat:
            cat = Category(name=label)
            db.session.add(cat)
            db.session.flush()
        category_by_name[cname] = cat

    items_data = [
        {
            "name": "Margherita",
            "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil",
            "category": "classic",
            "price": Decimal("12.99"),
            "img": "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=2136&auto=format&fit=crop",
            "ingredients": ["Tomato Sauce", "Mozzarella Cheese", "Fresh Basil"],
        },
        {
            "name": "Pepperoni",
            "description": "All-time favorite topped with mozzarella and spicy pepperoni",
            "category": "classic",
            "price": Decimal("15.99"),
            "img": "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1480&auto=format&fit=crop",
            "ingredients": ["Tomato Sauce", "Mozzarella Cheese", "Pepperoni"],
        },
        {
            "name": "BBQ Chicken",
            "description": "BBQ sauce, grilled chicken, red onions, and cilantro",
            "category": "gourmet",
            "price": Decimal("18.99"),
            "img": "https://images.unsplash.com/photo-1739643815373-72444e14c54b?q=80&w=1480&auto=format&fit=crop",
            "ingredients": [
                "BBQ Sauce",
                "Mozzarella Cheese",
                "Grilled Chicken",
                "Red Onions",
                "Cilantro",
            ],
        },
        {
            "name": "Quattro Stagioni",
            "description": "Four seasons pizza with mushrooms, artichokes, ham, and olives",
            "category": "gourmet",
            "price": Decimal("19.99"),
            "img": "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1480&auto=format&fit=crop",
            "ingredients": [
                "Tomato Sauce",
                "Mozzarella Cheese",
                "Mushrooms",
                "Artichokes",
                "Ham",
                "Black Olives",
            ],
        },
        {
            "name": "Vegetarian Deluxe",
            "description": "Bell peppers, mushrooms, onions, tomatoes, and black olives",
            "category": "vegetarian",
            "price": Decimal("16.99"),
            "img": "https://images.unsplash.com/photo-1722707757608-7da361644637?q=80&w=1569&auto=format&fit=crop",
            "ingredients": [
                "Tomato Sauce",
                "Mozzarella Cheese",
                "Mushrooms",
                "Bell Peppers",
                "Yellow Onions",
                "Cherry Tomatoes",
                "Black Olives",
            ],
        },
        {
            "name": "Meat Lovers",
            "description": "Pepperoni, sausage, ham, and bacon",
            "category": "meat",
            "price": Decimal("21.99"),
            "img": "https://images.unsplash.com/photo-1745031601356-b897d614f21f?q=80&w=2070&auto=format&fit=crop",
            "ingredients": [
                "Tomato Sauce",
                "Mozzarella Cheese",
                "Pepperoni",
                "Italian Sausage",
                "Ham",
                "Bacon",
            ],
        },
    ]

    for spec in items_data:
        item = Item.query.filter_by(name=spec["name"]).first()
        if not item:
            item = Item(
                name=spec["name"],
                description=spec["description"],
                price=spec["price"],
                image_path=spec["img"],
                category_id=category_by_name[spec["category"]].id,
            )
            db.session.add(item)
            db.session.flush()

        existing_links = {
            (link.item_id, link.ingredient_id)
            for link in ItemIngredient.query.filter_by(item_id=item.id).all()
        }
        for ing_name in spec["ingredients"]:
            ing = ingredient_by_name.get(ing_name)
            if not ing:
                continue
            key = (item.id, ing.id)
            if key not in existing_links:
                db.session.add(ItemIngredient(item_id=item.id, ingredient_id=ing.id))

    extra_specs = [
        {
            "friendly": "Extra Cheese",
            "ingredient": "Mozzarella Cheese",
            "price": Decimal("2.50"),
            "desc": "Additional mozzarella cheese",
        },
        {
            "friendly": "Pepperoni",
            "ingredient": "Pepperoni",
            "price": Decimal("3.00"),
            "desc": "Spicy pepperoni slices",
        },
        {
            "friendly": "Mushrooms",
            "ingredient": "Mushrooms",
            "price": Decimal("2.00"),
            "desc": "Fresh button mushrooms",
        },
        {
            "friendly": "Italian Sausage",
            "ingredient": "Italian Sausage",
            "price": Decimal("3.50"),
            "desc": "Seasoned Italian sausage",
        },
        {
            "friendly": "Bell Peppers",
            "ingredient": "Bell Peppers",
            "price": Decimal("2.00"),
            "desc": "Fresh bell peppers",
        },
        {
            "friendly": "Olives",
            "ingredient": "Black Olives",
            "price": Decimal("2.25"),
            "desc": "Black olives",
        },
        {
            "friendly": "Onions",
            "ingredient": "Yellow Onions",
            "price": Decimal("1.50"),
            "desc": "Fresh onions",
        },
        {
            "friendly": "Bacon",
            "ingredient": "Bacon",
            "price": Decimal("4.00"),
            "desc": "Crispy bacon strips",
        },
        {
            "friendly": "Pineapple",
            "ingredient": "Pineapple",
            "price": Decimal("2.50"),
            "desc": "Sweet pineapple chunks",
        },
        {
            "friendly": "Jalapeños",
            "ingredient": "Jalapeños",
            "price": Decimal("1.75"),
            "desc": "Spicy jalapeño peppers",
        },
        {
            "friendly": "Garlic",
            "ingredient": "Garlic",
            "price": Decimal("1.25"),
            "desc": "Fresh minced garlic",
        },
        {
            "friendly": "Spinach",
            "ingredient": "Spinach",
            "price": Decimal("2.25"),
            "desc": "Fresh baby spinach",
        },
    ]

    for ex in extra_specs:
        ing = ingredient_by_name.get(ex["ingredient"])
        if not ing:
            continue

        existing = ExtraOption.query.filter_by(ingredient_id=ing.id).first()
        if not existing:
            db.session.add(
                ExtraOption(
                    ingredient_id=ing.id,
                    extra_price=ex["price"],
                    description=ex["desc"],
                )
            )

    try:
        db.session.commit()
        print("Data seeded successfully!")
    except Exception as e:
        db.session.rollback()
        print(f"Error seeding data: {e}")
        raise
