import { AdrillaLogoSvg } from "../../assets/svg";
import { Button } from "../atoms";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "#" },
    { name: "Products", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Contact Us", path: "#" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="flex items-center justify-between mt-2.5 px-20 h-21.25 bg-white/20 backdrop-blur sticky top-0 z-999">
      <img src={AdrillaLogoSvg} alt="Adrilla Logo" className="h-12" />
      <div className="flex items-center gap-7 ">
        {navItems.map((item) => {
          const isSelected = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`font-manrope text-base leading-4.5 hover:opacity-80 ${
                isSelected ? "font-medium text-[#3E6EB4]" : "font-normal text-[#1E1C26]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <Button>Get Started</Button>
    </nav>
  );
};

export default Navbar;
