import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "./PrimaryButton";
import { decrementQuant, incrementQuant } from "../../features/cartSlice";

const QuantityCounter = ({ id }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const product = cartItems.find((item) => item.id === id);

  return (
    <>
      <PrimaryButton
        onClickHandler={() => dispatch(decrementQuant({ id: product.id }))}
        sx="text-xs h-6 w-6"
        text="➖"
      />
      <div className="bg-gray-200 border-1 !h-6 w-8 px-2 inline-flex items-center justify-center text-sm font-medium">
        {product.quantity}
      </div>
      <PrimaryButton
        onClickHandler={() => dispatch(incrementQuant({ id: product.id }))}
        sx="text-xs h-6 w-6"
        text="➕"
      />
    </>
  );
};

export default QuantityCounter;
