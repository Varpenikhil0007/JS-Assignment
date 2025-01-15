// Updated `InvoiceModal.jsx` to showcase additional features

import React from "react";
import { BiX } from "react-icons/bi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const InvoiceModal = ({
  showModal,
  closeModal,
  items,
  subTotal,
  taxAmount,
  total,
  currency,
  currentDate,
  dueDate,
  billTo,
  billFrom,
  notes,
}) => {
  if (!showModal) return null;

  // Function to download the invoice as PDF
  const downloadInvoice = () => {
    const modalContent = document.getElementById("invoice-content");
    html2canvas(modalContent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <BiX size={24} />
        </button>

        {/* Invoice Content */}
        <div id="invoice-content">
          <h2 className="text-2xl font-bold text-center mb-4">Invoice</h2>

          {/* Dates and Parties */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">Date: <span className="font-medium">{currentDate}</span></p>
            <p className="text-sm text-gray-600">Due Date: <span className="font-medium">{dueDate || "Not Specified"}</span></p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Bill To:</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{billTo || "N/A"}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Bill From:</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{billFrom || "N/A"}</p>
            </div>
          </div>

          {/* Items Table */}
          <table className="w-full text-left border-collapse mb-6">
            <thead>
              <tr>
                <th className="border-b p-2 font-medium text-gray-700">Item</th>
                <th className="border-b p-2 font-medium text-gray-700">Quantity</th>
                <th className="border-b p-2 font-medium text-gray-700">Price</th>
                <th className="border-b p-2 font-medium text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border-b p-2 text-gray-700">{item.name}</td>
                  <td className="border-b p-2 text-gray-700">{item.quantity}</td>
                  <td className="border-b p-2 text-gray-700">{currency}{item.price.toFixed(2)}</td>
                  <td className="border-b p-2 text-gray-700">{currency}{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Summary */}
          <div className="text-right mb-6">
            <p className="text-sm text-gray-700">Subtotal: <span className="font-medium">{currency}{subTotal.toFixed(2)}</span></p>
            <p className="text-sm text-gray-700">Tax (18%): <span className="font-medium">{currency}{taxAmount.toFixed(2)}</span></p>
            <p className="text-lg font-bold">Total: <span>{currency}{total.toFixed(2)}</span></p>
          </div>

          {/* Notes Section */}
          {notes && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Notes:</h3>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{notes}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={downloadInvoice}
            className="bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
