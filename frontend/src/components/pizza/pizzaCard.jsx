import { Link } from "react-router-dom";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import PizzaImage from "./PizzaImage";
import { formatPrice } from "../../utils/formatting";

const PizzaCard = ({ pizza }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative mb-4">
        <PizzaImage
          src={pizza.image}
          alt={pizza.name}
          className="rounded-lg h-48"
          showOverlay={false}
        />
        <div className="absolute top-4 right-4">
          <Badge variant={pizza.category}>{pizza.category}</Badge>
        </div>
      </div>

      <div className="flex flex-col flex-1 space-y-3">
        <h3 className="text-xl font-semibold text-usersnack-dark">
          {pizza.name}
        </h3>

        <p className="text-gray-600 text-sm flex-1">{pizza.description}</p>

        <div className="flex items-center justify-end">
          <span className="text-2xl font-bold text-usersnack-primary">
            {formatPrice(pizza.basePrice)}
          </span>
        </div>

        <Link to={`/pizza/${pizza.id}`} className="block w-full mt-auto">
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default PizzaCard;
