import useLocalStorage from "./useLocalStorage";

const useCart = () => {
  const [cartItems, setCartItems] = useLocalStorage("usersnack-cart", []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    updateCart(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        const pricePerUnit = item.price / item.quantity;
        return {
          ...item,
          quantity: newQuantity,
          price: pricePerUnit * newQuantity,
        };
      }
      return item;
    });

    updateCart(updatedCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const addToCart = (orderItem) => {
    const updatedCart = [...cartItems, orderItem];
    updateCart(updatedCart);
    return updatedCart;
  };

  return {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getItemCount,
    addToCart,
  };
};

export default useCart;
