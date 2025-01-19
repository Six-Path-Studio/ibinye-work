import { useState, useEffect } from "react";
import { Link } from "react-router";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`fixed w-full top-0 z-50 transition duration-300 ${isScrolled ? "bg-[#311BBC] shadow-lg" : "bg-transparent"
      }`}>
      <div className="flex justify-between items-center lg:px-20 px-4 py-5 text-white">
        {/* Logo */}
        <div className="flex">
          {/* <h1 className="text-lg text-white my-auto font-bold">Logo</h1> */}

          <img src="/images/logo.png" alt="" />
          {/* Desktop Navigation */}
          <nav className="hidden my-auto ml-10 lg:flex space-x-6">
            <Link to="/" className="hover:text-[#FFC107]">Home</Link>
            <Link to="/about-us" className="hover:text-[#FFC107]">About Us</Link>
            <Link to="/services" className="hover:text-[#FFC107]">Services</Link>
            <Link to="/contact-us" className="hover:text-[#FFC107]">Contact</Link>
          </nav>
        </div>

        {/* Book Now Button */}
        <button className="hidden lg:block bg-[#FFC107] p-4 px-10 text-black rounded-full">
          Book Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#311BBC] px-4 py-5 space-y-4">
          <Link to="/" className="block text-white hover:text-[#FFC107]" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about-us" className="block text-white hover:text-[#FFC107]" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/services" className="block text-white hover:text-[#FFC107]" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact-us" className="block text-white hover:text-[#FFC107]" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <button
            className="w-full bg-[#FFC107] p-2 text-black rounded-full mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </button>
        </nav>
      )}
    </header>
  );
};

export default HeaderNav;
