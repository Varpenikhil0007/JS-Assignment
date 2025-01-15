import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="bg-red-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 rounded-md fixed top-0 w-full z-10 shadow-xl">
      <div className="mx-4 max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <Link to="/">
            <h1 className="text-gray-800 block px-2 py-2 text-base font-medium">
              House <span className="text-green-500">Of Taste</span>
            </h1>
          </Link>

          <div className="flex space-x-4">
            <Link to="/" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Home</Link>
            <Link to="/menu" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Menu</Link>
            <Link to="/aboutus" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">About Us</Link>
            <Link to="/reservation" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Reservation</Link>
            <Link to="/blog" className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">Blog</Link>
          </div>

          <Link to="/cart">
  <div className="px-2 py-1 sm:px-6 lg:px-8 text-gray-800 rounded-md hover:bg-gray-200 bg-opacity-100">
    <div className="relative">
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
  </div>
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
