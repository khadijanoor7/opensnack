const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-usersnack-primary hover:bg-orange-600 text-white focus:ring-usersnack-primary",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-300",
    outline:
      "border-2 border-usersnack-primary text-usersnack-primary hover:bg-usersnack-primary hover:text-white focus:ring-usersnack-primary",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm rounded-md",
    medium: "px-4 py-2 text-base rounded-lg",
    large: "px-6 py-3 text-lg rounded-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-current"
    : "";

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
