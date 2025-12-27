const NavigationButton = ({ children, onClick, className = "", isDisabled }) => {
  return (
    <button 
      className={`w-9.5 h-9.5 rounded-lg p-1.75 bg-[#3E6EB4] ${className} disabled:text-[#00000040] cursor-pointer disabled:cursor-not-allowed flex items-center justify-center`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className={`text-white ${isDisabled ? "opacity-40" : ""}`}>{children}</span>
    </button>
  );
};

export default NavigationButton;