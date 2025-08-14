import { formatPrice } from "../../utils/formatting";

const ExtrasSelector = ({ extras, selectedExtras, onExtraToggle }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-3">Extra Toppings</h3>
    <div className="space-y-2 max-h-48 overflow-y-auto">
      {extras.map((extra) => (
        <label
          key={extra.id}
          className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedExtras.includes(extra.id)}
              onChange={() => onExtraToggle(extra.id)}
              className="mr-3 w-4 h-4 text-usersnack-primary border-gray-300 rounded focus:ring-usersnack-primary"
            />
            <div>
              <div className="font-medium">{extra.name}</div>
              <div className="text-sm text-gray-500">{extra.description}</div>
            </div>
          </div>
          <span className="font-semibold text-usersnack-primary">
            +{formatPrice(extra.price)}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default ExtrasSelector;
