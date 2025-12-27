const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button 
      className={`rounded-full py-4 px-9 border-none cursor-pointer bg-[#3E6EB4] text-white font-raleway font-semibold text-base ${className}`} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;