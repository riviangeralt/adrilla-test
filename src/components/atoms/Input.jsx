const Input = ({ type = "text", placeholder, className = "", as, ...props }) => {
  const Component = as || "input";
  return (
    <Component
      type={type}
      placeholder={placeholder}
      className={`rounded-[10px] py-4 px-6 bg-white border border-[#959595] font-manrope font-light text-base leading-5 focus:outline-none  ${className}`}
      {...props}
    />
  );
};

export default Input;
