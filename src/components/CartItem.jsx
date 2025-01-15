import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../features/cartSlice";
import QuantityCounter from "./shared/QuantityCounter";

const CartItem = ({ item, itemsPricing, isSoupPresent, isBreadPresent }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const findSoup = () => {
    return products.find((product) => product.id === 4);
  };
  const findBread = () => {
    return products.find((product) => product.id === 1);
  };

  return (
    <div className="flex justify-between mx-2 py-3">
      <div className="w-32">
        <h2 className="text-lg font-medium">{item.name}</h2>
        {item.id === 1 && !isSoupPresent && (
          <p className="text-xs text-red-500 mt-1">
            <span
              onClick={() =>
                dispatch(addToCart({ ...findSoup(), quantity: 1 }))
              }
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Add a Soup
            </span>{" "}
            and avail 50% off on Bread
          </p>
        )}
        {item.id === 4 && !isBreadPresent && (
          <p className="text-xs text-red-500 mt-1">
            Get 50% off on Bread!{" "}
            <span
              onClick={() =>
                dispatch(addToCart({ ...findBread(), quantity: 1 }))
              }
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Add a Bread now
            </span>{" "}
          </p>
        )}
      </div>
      <span>₹ {item.price}</span>
      <div className="text-end">
        <span>
          <button
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
            className="text-gray-100 font-medium rounded-sm h-6 w-6 me-2 text-xs bg-gray-400 hover:bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
          >
            ❌
          </button>
          {/* <button
            onClick={() => dispatch(decrementQuant({ id: item.id }))}
            className="text-gray-100 font-medium rounded-sm h-6 w-6 text-xs bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            ➖
          </button>
          <div className="bg-gray-200 border-1 !h-6 w-8 px-2 inline-flex items-center justify-center text-sm font-medium">
            {item.quantity}
          </div>
          <button
            onClick={() => dispatch(incrementQuant({ id: item.id }))}
            className="text-gray-100 font-medium rounded-sm text-xs h-6 w-6 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            ➕
          </button> */}
          <QuantityCounter id={item.id} />
        </span>
        <p className="text-sm text-gray-600 mt-1">
          Item price ₹ {item.price}*{item.quantity} = ₹{" "}
          {itemsPricing[item.id]?.itemPrice}
        </p>
        {itemsPricing[item.id]?.saving > 0 && (
          <p className="text-sm text-red-500">
            You saved ₹ {itemsPricing[item.id]?.saving}
          </p>
        )}
        {item.id === 3 && (
          <p className="text-sm text-red-500">
            {item.quantity} free cheese will be added!
          </p>
        )}
        <p className="font-medium">
          Item Cost: ₹ {itemsPricing[item.id]?.itemCost}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
