import useCart from "../../hooks/useCart";
import CartItem from "../cart/CartItem";
import CartSummary from "../cart/CartSummary";
import EmptyCart from "../cart/EmptyCart";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();

  const placeOrder = () => {
    if (cartItems.length === 0) return;

    const order = {
      id: Date.now(),
      items: cartItems,
      total: getTotalPrice(),
      timestamp: new Date().toISOString(),
    };

    console.log("Order placed:", order);
    alert("Order placed successfully! (This is a demo)");
    clearCart();
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
