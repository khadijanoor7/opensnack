# Usersnack Pizza Delivery Backend

A robust Flask backend for the Usersnack pizza delivery application. Provides RESTful APIs for pizza menu, cart management, and orders. Built with Flask, SQLAlchemy, and database migrations for secure, scalable operations.

## 🍕 Features

- **Pizza Menu API**: CRUD endpoints for pizzas, categories, ingredients, and extras
- **Order API**: Manage orders

## 🚀 Tech Stack

- **Python 3.10+**
- **Flask** - REST API framework
- **SQLAlchemy** - ORM for relational databases
- **Flask-Migrate** - Database migrations

## 📦 Project Structure

```
backend/
├── app/
│   ├── api/             # API blueprints
│   ├── models/          # SQLAlchemy models
│   ├── __init__.py      # App factory
│   ├── config.py        # App configuration
│   ├── extensions.py    # Flask extensions (db, migrate etc.)
│   ├── seed-data.py     # Seed initial data
├── migrations/          # Database migrations
├── .env.example         # Environment variable template
├── requirements.txt     # Python dependencies
└── README.md
```

## 🛠️ Getting Started

### Prerequisites

- Python 3.10+
- PostgreSQL or SQLite
- pip

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**

   Copy `.env.example` to `.env` and set your database URI.

5. **Run database migrations**

   ```bash
   flask db upgrade
   ```

6. **Start the server**

   ```bash
   flask run
   ```

## 🔑 API Endpoints

### Health

- `GET /api/v1/health/liveness` - Liveness check

### Menu

- `GET /api/v1/menu/sizes` - List all available sizes
- `GET /api/v1/menu/items` - List all menu items (optionally filter by category)
- `GET /api/v1/menu/items/<item_id>` - Get details for a specific item
- `GET /api/v1/menu/ingredients` - List all ingredients
- `GET /api/v1/menu/extras` - List all extra options
- `GET /api/v1/menu/categories` - List all categories

### Orders

- `POST /api/v1/orders` - Place order
- `DELETE /api/v1/orders` - Delete orders


## 📄 Environment Variables

See `.env.example` for required variables: