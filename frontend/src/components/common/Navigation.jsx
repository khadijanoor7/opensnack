import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="hidden md:flex items-center space-x-8">
    <Link
      to="/"
      className="text-gray-700 hover:text-usersnack-primary transition-colors"
    >
      Menu
    </Link>
    <Link
      to="/about"
      className="text-gray-700 hover:text-usersnack-primary transition-colors"
    >
      About
    </Link>
    <Link
      to="/contact"
      className="text-gray-700 hover:text-usersnack-primary transition-colors"
    >
      Contact
    </Link>
  </nav>
);

export default Navigation;
