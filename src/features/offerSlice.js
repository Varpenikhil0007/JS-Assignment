import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: {
    1: {
      offer: "Get 33% off!",
    },
    2: {
      offer: "Get 50% off!",
    },
  },
};

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {},
});

export default offerSlice.reducer;
