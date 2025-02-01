// src/components/ui/Card.jsx
import PropTypes from "prop-types";

export function Card({ children, className = "", ...rest }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function CardHeader({ children, className = "", ...rest }) {
  return (
    <div className={`border-b pb-2 mb-4 ${className}`} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function CardTitle({ children, className = "", ...rest }) {
  return (
    <h2 className={`text-lg font-semibold ${className}`} {...rest}>
      {children}
    </h2>
  );
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function CardContent({ children, className = "", ...rest }) {
  return (
    <div className={`pt-2 ${className}`} {...rest}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};