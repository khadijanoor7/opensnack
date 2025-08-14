import { useState, useEffect } from "react";
import data from "../data/data.json";

const usePizzaData = () => {
  const [pizzas, setPizzas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [extras, setExtras] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Simulate API call delay (remove in production)
      const loadData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));

        setPizzas(data.pizzas || []);
        setIngredients(data.ingredients || []);
        setExtras(data.extras || []);
        setSizes(data.sizes || []);
        setLoading(false);
      };

      loadData();
    } catch (err) {
      setError("Failed to load pizza data");
      setLoading(false);
    }
  }, []);

  const getPizzaById = (id) => {
    return pizzas.find((pizza) => pizza.id === parseInt(id));
  };

  const getIngredientsByIds = (ingredientIds) => {
    return ingredientIds
      .map((id) => ingredients.find((ingredient) => ingredient.id === id))
      .filter(Boolean);
  };

  const getExtrasByIds = (extraIds) => {
    return extraIds
      .map((id) => extras.find((extra) => extra.id === id))
      .filter(Boolean);
  };

  const getSizeById = (sizeId) => {
    return sizes.find((size) => size.id === sizeId);
  };

  return {
    pizzas,
    ingredients,
    extras,
    sizes,
    loading,
    error,
    getPizzaById,
    getIngredientsByIds,
    getExtrasByIds,
    getSizeById,
  };
};

export default usePizzaData;
