const Button = ({ children, className = "", ...rest }) => {
  return (
    <button className={"p-2 bg-blue-400 cursor-pointer " + className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
