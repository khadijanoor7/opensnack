const PizzaIngredients = ({ ingredients }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-usersnack-dark mb-3">
      Ingredients
    </h3>
    <div className="flex flex-wrap gap-2">
      {ingredients.map((ingredient) => (
        <span
          key={ingredient.id}
          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
        >
          {ingredient.name}
        </span>
      ))}
    </div>
  </div>
);

export default PizzaIngredients;
