import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-usersnack-primary rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-sm">🍕</span>
    </div>
    <span className="text-2xl font-bold text-usersnack-dark">Usersnack</span>
  </Link>
);

export default Logo;
