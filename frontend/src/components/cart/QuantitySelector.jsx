const QuantitySelector = ({ quantity, onQuantityChange, minQuantity = 1 }) => (
  <div className="flex items-center space-x-3">
    <button
      onClick={() => onQuantityChange(Math.max(minQuantity, quantity - 1))}
      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
    >
      -
    </button>
    <span className="font-semibold w-8 text-center">{quantity}</span>
    <button
      onClick={() => onQuantityChange(quantity + 1)}
      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
    >
      +
    </button>
  </div>
);

export default QuantitySelector;
