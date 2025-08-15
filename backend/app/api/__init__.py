from importlib import import_module

V1_BLUEPRINTS = [
    ("app.api.v1.health.routes", "health_v1_bp", "/health"),
    ("app.api.v1.menu.routes", "menu_v1_bp", "/menu"),
    ("app.api.v1.orders.routes", "orders_v1_bp", "/orders"),
]


def register_versions(app, prefix="/api", versions=("v1",)):
    for v in versions:
        if v == "v1":
            for module_path, obj, subpath in V1_BLUEPRINTS:
                mod = import_module(module_path)
                blueprint = getattr(mod, obj)
                app.register_blueprint(blueprint, url_prefix=f"{prefix}/v1{subpath}")
