from dotenv import load_dotenv
from flask import Flask
from .config import get_config
from .extensions import db, migrate, cors
from .api import register_versions
from .cli import init_app as init_cli


def create_app() -> Flask:
    load_dotenv()
    app = Flask(__name__)
    app.config.from_object(get_config())

    db.init_app(app)
    migrate.init_app(app, db)

    register_versions(app, prefix="/api", versions=("v1",))

    init_cli(app)

    cors.init_app(
        app,
        resources={
            r"/api/*": {
                "origins": "*",
                "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
                "allow_headers": ["Content-Type", "Authorization"],
            }
        },
    )

    return app
