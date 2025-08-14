from flask import Blueprint, jsonify, current_app

health_v1_bp = Blueprint("health_v1", __name__, url_prefix="/api/v1/health")


@health_v1_bp.get("/liveness")
def liveness():
    return jsonify(
        {
            "status": "ok",
            "check": "liveness",
            "service": current_app.config.get("APP_NAME", "usersnack"),
            "version": current_app.config.get("APP_VERSION", "0.1.0"),
        }
    ), 200
