import os


class BaseConfig:
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///usersnack.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    APP_NAME = os.getenv("APP_NAME", "usersnack")
    APP_VERSION = os.getenv("APP_VERSION", "0.1.0")
    PORT = os.getenv("PORT", 5000)
    CORS_ORIGIN = os.getenv("REACT_URL", "http://localhost:5173")


def get_config():
    return BaseConfig
