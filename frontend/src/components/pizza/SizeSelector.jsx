import { formatPrice } from "../../utils/formatting";

const SizeSelector = ({ sizes, selectedSize, onSizeChange, basePrice }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3">Size</h3>
    <div className="grid grid-cols-2 gap-3">
      {sizes.map((size) => (
        <label
          key={size.id}
          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
            selectedSize === size.id
              ? "border-usersnack-primary bg-orange-50"
              : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="size"
            value={size.id}
            checked={selectedSize === size.id}
            onChange={() => onSizeChange(size.id)}
            className="sr-only"
          />
          <div className="text-sm font-medium">{size.name}</div>
          <div className="text-xs text-gray-500">{size.diameter}</div>
          <div className="text-sm font-semibold text-usersnack-primary">
            {formatPrice(basePrice * size.multiplier)}
          </div>
        </label>
      ))}
    </div>
  </div>
);

export default SizeSelector;
