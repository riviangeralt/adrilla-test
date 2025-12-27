const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-[#3E6EB4] text-white py-20 px-20 ${className}`}>
      <p className="font-manrope font-normal text-sm leading-[100%] text-white mb-6">
        &copy; 2025 by Aadrila Technologies Private Limited CIN
        U74999UP2017PTC094688
      </p>
      <pre className="font-manrope font-normal text-sm leading-[100%] text-white">
        Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,{" "}
        {"\n"}
        Uttar Pradesh, India, 226024
      </pre>
    </footer>
  );
};

export default Footer;
