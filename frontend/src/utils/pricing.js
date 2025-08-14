export const calculatePizzaPrice = (
  basePrice,
  sizeMultiplier,
  extras,
  quantity = 1
) => {
  const sizedPrice = basePrice * sizeMultiplier;
  const extrasPrice = extras.reduce((total, extra) => total + extra.price, 0);
  return (sizedPrice + extrasPrice) * quantity;
};

export const calculateOrderTotal = (
  subtotal,
  deliveryFee = 3.99,
  taxRate = 0.08
) => {
  const tax = subtotal * taxRate;
  return subtotal + deliveryFee + tax;
};

export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const calculateTax = (subtotal, taxRate = 0.08) => {
  return subtotal * taxRate;
};
