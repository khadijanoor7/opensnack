import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { calculatePizzaPrice } from "../../utils/pricing";
import { formatPrice } from "../../utils/formatting";
import Breadcrumb from "../common/Breadcrumb";
import PizzaIngredients from "../pizza/PizzaIngredients";
import SizeSelector from "../pizza/SizeSelector";
import ExtrasSelector from "../pizza/ExtrasSelector";
import QuantitySelector from "../cart/QuantitySelector";
import usePizzaData from "../../hooks/usePizzaData";
import useCart from "../../hooks/useCart";

import Button from "../ui/Button";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

const PizzaDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(2);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const {
    getPizzaById,
    getIngredientsByIds,
    getExtrasByIds,
    getSizeById,
    extras,
    sizes,
    loading,
    error,
  } = usePizzaData();

  const { addToCart } = useCart();
  const pizza = getPizzaById(id);

  const handleExtraToggle = (extraId) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  const calculatePrice = () => {
    if (!pizza) return 0;

    const selectedSizeObj = getSizeById(selectedSize);
    const selectedExtrasObjs = getExtrasByIds(selectedExtras);

    return calculatePizzaPrice(
      pizza.basePrice,
      selectedSizeObj?.multiplier || 1,
      selectedExtrasObjs,
      quantity
    );
  };

  const handleAddToCart = () => {
    const orderItem = {
      id: Date.now(),
      pizzaId: pizza.id,
      pizzaName: pizza.name,
      size: getSizeById(selectedSize),
      extras: getExtrasByIds(selectedExtras),
      quantity,
      price: calculatePrice(),
      image: pizza.image,
    };

    addToCart(orderItem);
    alert(`${pizza.name} added to cart!`);

    // Reset quantity to 1 after successfully adding to cart
    setQuantity(1);
  };

  const getPizzaIngredients = () => {
    if (!pizza) return [];
    return getIngredientsByIds(pizza.ingredients);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-64">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (error || !pizza) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600">
            {error || "Pizza not found"}
          </h2>
          <Button className="mt-4">Back to Menu</Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [{ label: "← Back to Menu", href: "/" }];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-96 object-cover"
            />
          </div>

          <h1 className="text-3xl font-bold text-usersnack-dark mb-4">
            {pizza.name}
          </h1>

          <p className="text-gray-600 text-lg mb-6">{pizza.description}</p>

          <PizzaIngredients ingredients={getPizzaIngredients()} />
        </div>

        <Card>
          <h2 className="text-2xl font-bold text-usersnack-dark mb-6">
            Customize Your Order
          </h2>

          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
            basePrice={pizza.basePrice}
          />

          <ExtrasSelector
            extras={extras}
            selectedExtras={selectedExtras}
            onExtraToggle={handleExtraToggle}
          />

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Quantity</h3>
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-2xl font-bold text-usersnack-primary">
                {formatPrice(calculatePrice())}
              </span>
            </div>

            <Button onClick={handleAddToCart} className="w-full text-lg py-3">
              Add to Cart
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PizzaDetail;
