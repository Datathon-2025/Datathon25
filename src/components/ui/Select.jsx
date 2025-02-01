import { useState } from "react";
import PropTypes from "prop-types";

export function Select({ value, onValueChange, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (newValue) => {
    onValueChange(newValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || "Select an option"}
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
          <ul
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            {children.map((child) =>
              React.cloneElement(child, { onSelect: handleSelect })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export function SelectTrigger({ children, className = "", ...rest }) {
  return (
    <div className={`relative ${className}`} {...rest}>
      {children}
    </div>
  );
}

SelectTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function SelectContent({ children, className = "", ...rest }) {
  return (
    <div className={`absolute mt-1 w-full rounded-md bg-white shadow-lg ${className}`} {...rest}>
      {children}
    </div>
  );
}

SelectContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export function SelectItem({ value, children, onSelect, className = "", ...rest }) {
  return (
    <li
      role="option"
      className={`cursor-default select-none relative py-2 pl-3 pr-9 ${className}`}
      onClick={() => onSelect(value)}
      {...rest}
    >
      {children}
    </li>
  );
}

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export function SelectValue({ placeholder, className = "", ...rest }) {
  return (
    <span className={`block truncate ${className}`} {...rest}>
      {placeholder}
    </span>
  );
}

SelectValue.propTypes = {
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};