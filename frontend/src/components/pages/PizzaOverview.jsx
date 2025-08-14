const PizzaOverview = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-usersnack-dark mb-4">
          Our Delicious Pizzas
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Choose from our wide selection of freshly made pizzas
        </p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-gray-500">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-lg">Pizza menu coming soon!</p>
            <p className="text-sm">
              We're preparing something delicious for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaOverview;
