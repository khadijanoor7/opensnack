import { Link } from "react-router-dom";

const Cart = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-usersnack-dark mb-4">Your Cart</h1>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="text-gray-600 mb-6">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM8 8a1 1 0 000 2h4a1 1 0 100-2H8z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-lg">Your cart is empty</p>
          <p className="text-sm">Add some delicious pizzas to get started!</p>
        </div>
        <Link to="/">
          <button className="w-full bg-usersnack-primary hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Browse Pizzas
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Cart;
