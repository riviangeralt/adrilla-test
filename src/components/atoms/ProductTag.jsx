const ProductTag = ({ children, className = "" }) => {
  return (
    <span
      className={`flex max-w-min bg-linear-to-r from-[#CD6028] to-[#3E6EB4] text-white rounded-[3.125rem] py-4 px-6 font-manrope font-bold text-xl items-center h-13 ${className}`}
    >
      {children}
    </span>
  );
};

export default ProductTag;
