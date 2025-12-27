const GradientText = ({ children, className = "" }) => {
  return (
    <span className={`bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;