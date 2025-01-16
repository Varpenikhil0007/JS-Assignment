import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-red-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 rounded-md fixed top-0 w-full z-10 shadow-xl">
      <div className="mx-4 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-gray-800 block text-lg font-medium">
              House <span className="text-green-500">Of Taste</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Menu
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              About Us
            </Link>
            <Link
              to="/reservation"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Reservation
            </Link>
            <Link
              to="/blog"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Blog
            </Link>
          </div>

          {/* Cart Icon */}
          <Link to="/cart">
            <div className="relative px-2 py-1 sm:px-6 lg:px-8 text-gray-800 rounded-md hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-violet-500 rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 rounded text-gray-800 hover:bg-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link
              to="/"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Menu
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              About Us
            </Link>
            <Link
              to="/reservation"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Reservation
            </Link>
            <Link
              to="/blog"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
