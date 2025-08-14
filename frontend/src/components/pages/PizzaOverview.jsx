import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";

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

        <Card className="max-w-md mx-auto">
          <div className="text-gray-500">
            <LoadingSpinner size="large" className="mx-auto mb-4" />
            <p className="text-lg">Loading our delicious pizzas...</p>
            <p className="text-sm">
              We're preparing something amazing for you.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PizzaOverview;
