import PropTypes from "prop-types";

const Button = ({ children, variant = "default", ...props }) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none focus:ring";
  const styles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "outline"]),
};

export default Button;