import { useState } from "react";
import PizzaCard from "../pizza/pizzaCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import usePizzaData from "../../hooks/usePizzaData";

const PizzaOverview = () => {
  const { pizzas, loading, error } = usePizzaData();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Pizzas" },
    { id: "classic", name: "Classic" },
    { id: "gourmet", name: "Gourmet" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "meat", name: "Meat Lovers" },
  ];

  // Filter pizzas by category
  const getFilteredPizzas = () => {
    if (selectedCategory === "all") return pizzas;
    return pizzas.filter((pizza) => pizza.category === selectedCategory);
  };

  const filteredPizzas = getFilteredPizzas();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <LoadingSpinner size="large" className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-usersnack-dark mb-2">
            Loading Our Delicious Pizzas...
          </h2>
          <p className="text-gray-600">
            We're preparing something amazing for you!
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-usersnack-dark mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-usersnack-dark mb-4">
          Our Delicious Pizzas
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Choose from our wide selection of freshly made pizzas, crafted with
          the finest ingredients
        </p>

        {/* Stats */}
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-usersnack-primary">
              {pizzas.length}+
            </div>
            <div className="text-sm text-gray-500">Pizza Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-usersnack-primary">
              30min
            </div>
            <div className="text-sm text-gray-500">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-usersnack-primary">
              Fresh
            </div>
            <div className="text-sm text-gray-500">Made Daily</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "primary" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <span>{category.name}</span>
              {selectedCategory === category.id && (
                <Badge
                  variant="secondary"
                  className="ml-2 bg-white/20 text-white"
                >
                  {category.id === "all"
                    ? pizzas.length
                    : pizzas.filter((p) => p.category === category.id).length}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600 text-center">
          Showing{" "}
          <span className="font-semibold text-usersnack-primary">
            {filteredPizzas.length}
          </span>
          {selectedCategory === "all"
            ? " pizzas"
            : ` ${selectedCategory} pizzas`}
        </p>
      </div>

      {/* Pizza Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredPizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>

      {/* No Results */}
      {filteredPizzas.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No pizzas found in this category
          </h3>
          <Button onClick={() => setSelectedCategory("all")} variant="outline">
            Show All Pizzas
          </Button>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-usersnack-primary to-usersnack-secondary rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Can't decide? Try our classics!
        </h2>
        <p className="text-lg opacity-90 mb-6">
          Start with our most popular Margherita and Pepperoni pizzas
        </p>
        <Button
          onClick={() => setSelectedCategory("classic")}
          variant="secondary"
          className="bg-white text-usersnack-primary hover:bg-gray-100"
        >
          View Classic Pizzas
        </Button>
      </div>
    </div>
  );
};

export default PizzaOverview;
