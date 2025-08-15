import apiClient from "../../utils/apiClient";
import useCart from "../../hooks/useCart";
import CartItem from "../cart/CartItem";
import CartSummary from "../cart/CartSummary";
import EmptyCart from "../cart/EmptyCart";
import toast from "react-hot-toast";
import { calculateTax } from "../../utils/pricing";
import { DELIVERY_FEE, TAX_RATE } from "../../utils/constants";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();

  const placeOrder = async () => {
    if (cartItems.length === 0) return;

    const items = cartItems.map((ci) => ({
      item_id: ci.pizzaId,
      size_id: ci.size?.id,
      quantity: ci.quantity,
      extras: ci.extras?.map((e) => e.id) ?? [],
    }));

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

    const payload = {
      items,
      delivery_fee: DELIVERY_FEE,
      tax: calculateTax(subtotal, TAX_RATE),
    };

    try {
      await apiClient.post("/orders", payload);
      toast.success("Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error("Order failed:", err);
      toast.fail("Something went wrong. Please try again.");
    }
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-usersnack-dark mb-8">
        Your Cart ({cartItems.length} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <div className="lg:col-span-1">
          <CartSummary
            subtotal={getTotalPrice()}
            onPlaceOrder={placeOrder}
            onClearCart={clearCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
