import { useState, useEffect } from "react";
import apiClient from "../utils/apiClient";

const usePizzaData = () => {
  const [pizzas, setPizzas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [extras, setExtras] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      setLoading(true);
      try {
        const [ingredientsRes, extrasRes, sizesRes, pizzaRes] =
          await Promise.all([
            apiClient.get(`menu/ingredients`),
            apiClient.get(`menu/extras`),
            apiClient.get(`menu/sizes`),
            apiClient.get(`menu/items`),
          ]);

        setIngredients(ingredientsRes.data);
        setExtras(extrasRes.data);
        setSizes(sizesRes.data);
        setPizzas(pizzaRes.data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Failed to load menu data");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
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
