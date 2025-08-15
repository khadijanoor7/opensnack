# Usersnack Pizza Delivery App

A full-stack pizza delivery application featuring a modern React frontend and a robust backend (Flask). Usersnack provides a seamless pizza ordering experience, including menu browsing, customization, cart management, and order processing.

---

## 🍕 Features

- **Pizza Browsing**: Explore menu, filter by category
- **Pizza Customization**: Choose sizes, add extras
- **Shopping Cart**: Add and remove items
- **Order Management**: Place orders
- **Responsive Design**: Optimized for all devices (frontend)
- **Persistent Storage**: Cart and session persistence
---

## 🚀 Tech Stack

### Frontend

- **React 19**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Custom Hooks**
- **Local Storage**

### Backend

- **Flask** (Python 3.10+)
- **SQLAlchemy**
- **Database migrations**

---

## 📦 Project Structure

```
opensnack/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── app/ (Flask)
│   │   ├── api/
│   │   ├── models/
│   │   ├── __init__.py
│   │   ├── config.py
│   │   ├── extensions.py
│   │   ├── seed-data.py
│   ├── migrations/
│   ├── .env.example
│   ├── requirements.txt
│   └── README.md
└── README.md
```

---

## 🛠️ Getting Started

### Frontend

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```
2. **Start development server**
   ```bash
   npm run dev
   ```
3. **Open** `http://localhost:5173`

### Backend

1. **Create virtual environment**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   ```
   or **Install dependencies**
   ```bash
   npm install
   ```
2. **Configure environment variables**
   Copy `.env.example` to `.env` and set your database URI.
3. **Run migrations**
   - Flask: `flask db upgrade`
4. **Start server**
   - Flask: `flask run`
5. **API available at** `http://localhost:5000/api`

---

## 🔑 Key API Endpoints (Backend)

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

## 📋 Future Enhancements

- User accounts and order history
- Admin dashboard
- Customer reviews
- Real-time order status

---

## 📄 Environment Variables

See `env.example` for required frontend and backend variables.

---