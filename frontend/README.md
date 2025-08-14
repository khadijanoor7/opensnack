# Usersnack Pizza Delivery Frontend

A modern, responsive React frontend for the Usersnack pizza delivery application. Built with React 19, Vite, and Tailwind CSS, this application provides a seamless pizza ordering experience with a clean, modular architecture.

## 🍕 Features

- **Pizza Browsing**: Browse our extensive menu with category filtering
- **Pizza Customization**: Choose sizes, add extras, and customize your perfect pizza
- **Shopping Cart**: Add items, modify quantities, and manage your order
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Cart updates across browser tabs
- **Loading States**: Smooth loading indicators and error handling
- **Local Storage**: Cart persists across browser sessions

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Hooks** - Reusable state management
- **Local Storage** - Client-side data persistence

## 📦 Project Structure

```
src/
├── components/
│   ├── cart/              # Cart-related components
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.jsx
│   │   ├── EmptyCart.jsx
│   │   └── QuantitySelector.jsx
│   ├── common/            # Shared components
│   │   ├── Breadcrumb.jsx
│   │   ├── Logo.jsx
│   │   └── Navigation.jsx
│   ├── layout/            # Layout components
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── pages/             # Page components
│   │   ├── AboutPage.jsx
│   │   ├── Cart.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PizzaDetail.jsx
│   │   └── PizzaOverview.jsx
│   ├── pizza/             # Pizza-specific components
│   │   ├── ExtrasSelector.jsx
│   │   ├── PizzaCard.jsx
│   │   ├── PizzaImage.jsx
│   │   ├── PizzaIngredients.jsx
│   │   └── SizeSelector.jsx
│   └── ui/                # Reusable UI components
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Card.jsx
│       └── LoadingSpinner.jsx
├── data/                  # Static data
│   └── data.json
├── hooks/                 # Custom React hooks
│   ├── useCart.js
│   ├── useLocalStorage.js
│   └── usePizzaData.js
├── utils/                 # Utility functions
│   ├── cart.js
│   ├── formatting.js
│   └── pricing.js
├── App.jsx               # Main application component
└── main.jsx              # Application entry point
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd order-manager-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: `#FF6B35` (Usersnack Orange)
- **Secondary**: `#F7931E` (Light Orange)
- **Dark**: `#2C3E50` (Dark Blue)
- **Light**: `#ECF0F1` (Light Gray)

### Components
- **Buttons**: Primary, Secondary, and Outline variants
- **Cards**: Consistent shadow and padding
- **Badges**: Category-colored badges
- **Loading**: Animated spinners

## 📱 Features Breakdown

### Pizza Overview
- Grid layout of all pizzas
- Category filtering (Classic, Gourmet, Vegetarian, Meat Lovers)
- Responsive card design with hover effects
- Loading states and error handling

### Pizza Detail
- Detailed pizza information
- Size selection with price updates
- Extra toppings with individual pricing
- Quantity selector
- Real-time price calculation
- Add to cart functionality

### Shopping Cart
- Item management (add, remove, update quantities)
- Order summary with tax and delivery calculations
- Empty cart state
- Cross-tab synchronization
- Persistent storage

### Additional Pages
- **About**: Brand story and values
- **Contact**: Business information and hours
- **Responsive**: Mobile-optimized layouts

## 🔧 Key Components

### Custom Hooks

#### `useCart`
Manages cart state with localStorage persistence
```javascript
const { cartItems, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();
```

#### `usePizzaData`
Handles pizza data with loading states
```javascript
const { pizzas, ingredients, extras, sizes, loading, error } = usePizzaData();
```

#### `useLocalStorage`
Generic localStorage hook with cross-tab sync
```javascript
const [value, setValue] = useLocalStorage('key', defaultValue);
```

### Utility Functions

#### Pricing Utils
```javascript
import { calculatePizzaPrice, calculateOrderTotal } from './utils/pricing';
```

#### Formatting Utils
```javascript
import { formatPrice } from './utils/formatting';
```

## 📋 Future Enhancements

- [ ] User authentication and accounts
- [ ] Order history and tracking
- [ ] Payment integration (Stripe/PayPal)
- [ ] Real-time order status updates
- [ ] Admin panel for menu management
- [ ] Backend API integration
- [ ] Push notifications
- [ ] Favorites and wishlists
- [ ] Customer reviews and ratings
- [ ] Delivery time estimation
- [ ] Multiple payment methods
- [ ] Loyalty program
- [ ] Social media integration

### Menu Data
Update pizza offerings in `src/data/data.json`
