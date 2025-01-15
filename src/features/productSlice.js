import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

let products = [];

async function getProducts() {
  try {
    const snapshot = await getDocs(collection(db, "products"));
    products = snapshot.forEach((doc) => {
      console.log(doc.data());
      products.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error("Couldn't fetch products", e);
  }
}

getProducts();
console.log(products, "--");

const initialState = {
  products: products.length
    ? products
    : [
        {
          id: 1,
          name: "Bread",
          price: 30,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqogGlCZ97donu43JwRhnDnqGmwy_NqIFIA&s",
        },
        {
          id: 2,
          name: "Milk",
          price: 30,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaL7-gVybcez7Akaoq8vLEYpOLwVhtz9kJw&s",
        },
        {
          id: 3,
          name: "Cheese",
          offer: "Buy 1 get 1 free!",
          price: 180,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbigLjIpSbPG_K5CYKq7gW2R1oruRONssWw&s",
        },
        {
          id: 4,
          name: "Soup",
          price: 100,
          offer: <p> Buy a soup and get  <br />Bread for half the price!</p>,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXRbY8plDoDCKi41jYZvCH3v6x2f9ADlVdg&s",
        },
        {
          id: 5,
          name: "Butter",
          price: 150,
          offer: "Get 33% off!",
          offer_id: 1,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/600px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG",
        },
      ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let product = action.payload;
      let maxId = 0;
      state.products.forEach((e) => {
        maxId = e.id > maxId ? e.id : maxId;
      });
      state.products = [...state.products, { id: maxId + 1, ...product }];
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
