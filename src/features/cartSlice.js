import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity += 1;
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    incrementQuant: (state, action) => {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrementQuant: (state, action) => {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity -= 1;
        if (productItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== item.id
      );
    },
    emptyCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  incrementQuant,
  decrementQuant,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
