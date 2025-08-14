import QuantitySelector from "./QuantitySelector";
import { formatPrice } from "../../utils/formatting";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="card">
    <div className="flex items-center space-x-4">
      <img
        src={item.image}
        alt={item.pizzaName}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.pizzaName}</h3>
        <p className="text-gray-600 text-sm">
          Size: {item.size.name} ({item.size.diameter})
        </p>
        {item.extras.length > 0 && (
          <p className="text-gray-600 text-sm">
            Extras: {item.extras.map((extra) => extra.name).join(", ")}
          </p>
        )}
      </div>

      <QuantitySelector
        quantity={item.quantity}
        onQuantityChange={(newQuantity) =>
          onUpdateQuantity(item.id, newQuantity)
        }
      />

      <div className="text-right min-w-[120px] flex flex-col items-end space-y-2">
        <p className="font-bold text-lg text-usersnack-primary">
          {formatPrice(item.price)}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-600 hover:text-red-800 text-sm border border-red-300 hover:border-red-500 px-3 py-1 rounded transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);

export default CartItem;
