import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/productSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [offer, setOffer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addProduct({
        name,
        price,
        image,
        offer_id: offer,
      })
    );
    setImage("");
    setName("");
    setPrice("");
    setOffer("");
  };
  return (
    <div className="mt-20 p-3 max-w-lg mx-auto bg-white rounded-md drop-shadow-lg">
      <h1 className="text-2xl font-semibold ">Add New Product</h1>
      <hr className="h-px mt-2 mb-3 bg-orange-600 border-2 dark:bg-gray-700" />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="mt-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name{" "}
            <span className="text-sm font-normal">--dev Butter</span>
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bread"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-2" style={{ width: "48%" }}>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price <span className="text-sm font-normal">--dev 99</span>
            </label>
            <input
              type="number"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="30"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2" style={{ width: "48%" }}>
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="offer"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Offer ID (if applicable)
          </label>
          <input
            type="number"
            id="offer"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
          />
          <p className="text-sm text-red-400 ms-2">1. Get 33% off!</p>
          <p className="text-sm text-red-400 ms-2">2. Get 50% off!</p>
        </div>
        <div className="mt-2 text-center">
          <button
            type="submit"
            className="p-2.5 text-gray-100 font-medium rounded-sm text-xs bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          >
            Add Product
          </button>
        </div>
      </form>

      <p className="text-xs mt-4 flex-wrap">
        Butter image:
        https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/600px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG
      </p>
    </div>
  );
};

export default Admin;
