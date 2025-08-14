import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => (
  <nav className="mb-8">
    {items.map((item, index) => (
      <span key={index}>
        {index > 0 && <span className="mx-2 text-gray-400">→</span>}
        {item.href ? (
          <Link
            to={item.href}
            className="text-usersnack-primary hover:underline"
          >
            {item.label}
          </Link>
        ) : (
          <span className="text-gray-600">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
);

export default Breadcrumb;
