import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from './Logopage.png';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateLoginStatus = () => {
      const isLogged = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(isLogged);
    };
  
    updateLoginStatus(); // call initially
    window.addEventListener("loginStatusChanged", updateLoginStatus);
  
    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
    };
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  
    window.dispatchEvent(new Event("loginStatusChanged")); // Notify Navbar
  
    toast.success("Logout successfully");
    navigate("/login");
    setMenuOpen(false);
  };
  

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-gray-400 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3 sm:px-6">
        {/* Logo */}
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        </NavLink>

        {/* Hamburger Icon (only visible on xs/sm) */}
        <button className="md:hidden text-2xl text-black" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items (visible on md and above) */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="font-bold text-lg">Home</NavLink>

          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl text-black" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </NavLink>

          {!isLoggedIn ? (
            <NavLink to="/login" className="bg-white px-3 py-1 rounded text-black font-semibold">
              Login
            </NavLink>
          ) : (
            <button onClick={handleLogout} className="bg-white text-black px-3 py-1 rounded">
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (visible on xs/sm only) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-300 py-4 gap-4 px-4">
          <NavLink to="/" className="font-semibold text-lg" onClick={() => setMenuOpen(false)}>Home</NavLink>

          <NavLink to="/cart" className="relative" onClick={() => setMenuOpen(false)}>
            <FaShoppingCart className="text-2xl text-black" />
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          </NavLink>

          {!isLoggedIn ? (
            <NavLink to="/login" className="bg-white px-3 py-1 rounded text-black font-semibold" onClick={() => setMenuOpen(false)}>
              Login
            </NavLink>
          ) : (
            <button onClick={handleLogout} className="bg-white text-black px-3 py-1 rounded">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
