import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../features/cartSlice";
import PrimaryButton from "./shared/PrimaryButton";
import QuantityCounter from "./shared/QuantityCounter";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { offers } = useSelector((state) => state.offer);
  const { cartItems } = useSelector((state) => state.cart);

  const addProduct = (product) => {
    let item = { ...product, quantity: 1 };
    dispatch(addToCart(item));
  };

  return (
    <div className="flex justify-between py-3">
      <div className="ms-2 flex justify-center">
        <img
          src={product.image}
          alt="product"
          className="w-10 h-10 me-2 rounded-lg"
        />
        <span>
          <h2 className="font-medium">{product.name}</h2>
          {(product.offer || product.offer_id) && (
            <h4 className="text-xs text-red-500 ">
              {product.offer ? product.offer : offers[product.offer_id].offer}
            </h4>
          )}
        </span>
      </div>
      <div className="me-2">
        <span className="me-4">₹ {product.price}</span>
        {cartItems.find((item) => item.id === product.id) ? (
          <span>
            <button
              onClick={() => dispatch(removeFromCart({ id: product.id }))}
              className="text-gray-100 font-medium rounded-sm h-6 w-6 me-2 text-xs bg-gray-400 hover:bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
              ❌
            </button>
            <QuantityCounter id={product.id} />
          </span>
        ) : (
          <PrimaryButton
            onClickHandler={() => addProduct(product)}
            text="Add"
            sx="p-2.5"
          />
        )}
      </div>
    </div>
  );
};

export default Product;
