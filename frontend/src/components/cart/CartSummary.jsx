import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Card from "../ui/Card";
import { calculateOrderTotal, calculateTax } from "../../utils/pricing";
import { formatPrice } from "../../utils/formatting";

const CartSummary = ({ subtotal, onPlaceOrder, onClearCart }) => {
  const deliveryFee = 3.99;
  const taxRate = 0.08;
  const tax = calculateTax(subtotal, taxRate);
  const total = calculateOrderTotal(subtotal, deliveryFee, taxRate);

  return (
    <Card className="sticky top-4">
      <h3 className="text-xl font-bold text-usersnack-dark mb-4">
        Order Summary
      </h3>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee:</span>
          <span>{formatPrice(deliveryFee)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span>
          <span>{formatPrice(tax)}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span className="text-usersnack-primary">{formatPrice(total)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button onClick={onPlaceOrder} className="w-full">
          Place Order
        </Button>

        <Button onClick={onClearCart} variant="secondary" className="w-full">
          Clear Cart
        </Button>

        <Link
          to="/"
          className="block text-center text-usersnack-primary hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    </Card>
  );
};

export default CartSummary;
