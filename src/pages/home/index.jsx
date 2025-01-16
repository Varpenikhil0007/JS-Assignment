// Updated `index.jsx` with consistent styling for invoice fields

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/Product";
import InvoiceModal from "./InvoiceModal";

const Home = () => {
  // Fetch products and cart items from the Redux store
  const { products } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart.cartItems);

  // State to handle modal visibility and additional fields
  const [showModal, setShowModal] = useState(false);
  const [billTo, setBillTo] = useState("");
  const [billFrom, setBillFrom] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  // Calculate subtotal and total for the invoice
  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxRate = 0.18; // Example tax rate (18%)
  const taxAmount = subTotal * taxRate;
  const total = subTotal + taxAmount;

  // Get current date
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="mt-20 p-5 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Products</h1>
      <hr className="h-px mb-4 bg-orange-600 border-0" />

      {products.map((product) => (
        <div key={product.id} className="mb-4">
          <Product product={product} />
          <hr className="h-px mt-2 bg-gray-300 border-0" />
        </div>
      ))}

      {/* Invoice Details */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Bill To:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none mb-4"
          value={billTo}
          onChange={(e) => setBillTo(e.target.value)}
          placeholder="Enter client details"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Bill From:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none mb-4"
          value={billFrom}
          onChange={(e) => setBillFrom(e.target.value)}
          placeholder="Enter your details"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Due Date:</label>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none mb-4"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Notes:</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none mb-4"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Additional notes for the invoice"
        />
      </div>

      {/* Review Invoice Button */}
      <button
        type="button"
        className="block w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        Review Invoice
      </button>

      {/* Invoice Modal */}
      {showModal && (
        <InvoiceModal
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          items={cartItems}
          subTotal={subTotal}
          taxAmount={taxAmount}
          total={total}
          currency="₹"
          currentDate={currentDate}
          dueDate={dueDate}
          billTo={billTo}
          billFrom={billFrom}
          notes={notes}
        />
      )}
    </div>
  );
};

export default Home;

// Ensure the InvoiceModal component is updated to display these fields in a consistent format.
