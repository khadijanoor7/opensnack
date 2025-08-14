// filepath: src/components/layout/Header.jsx
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Navigation from "../common/Navigation";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center space-x-2 text-gray-700 hover:text-usersnack-primary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 5H3m5 8v6a2 2 0 002 2h6a2 2 0 002-2v-6m-6 4h4"
              />
            </svg>
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
