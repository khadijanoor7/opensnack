// Utility functions for cart management

export const addToCart = (orderItem) => {
  const existingCart = JSON.parse(
    localStorage.getItem("usersnack-cart") || "[]"
  );
  const updatedCart = [...existingCart, orderItem];
  localStorage.setItem("usersnack-cart", JSON.stringify(updatedCart));

  // Dispatch custom event for real-time updates
  window.dispatchEvent(new CustomEvent("cartUpdated"));

  return updatedCart;
};

export const removeFromCart = (itemId) => {
  const existingCart = JSON.parse(
    localStorage.getItem("usersnack-cart") || "[]"
  );
  const updatedCart = existingCart.filter((item) => item.id !== itemId);
  localStorage.setItem("usersnack-cart", JSON.stringify(updatedCart));

  window.dispatchEvent(new CustomEvent("cartUpdated"));

  return updatedCart;
};

export const clearCart = () => {
  localStorage.removeItem("usersnack-cart");
  window.dispatchEvent(new CustomEvent("cartUpdated"));
};
