import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/productSlice";
import cartReducer from "../features/cartSlice";
import offerReducer from "../features/offerSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    offer: offerReducer,
  },
});

export default store;
