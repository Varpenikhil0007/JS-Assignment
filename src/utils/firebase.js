// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBnJj_K1WzecQijn7sqDf4OcbEl_Etpb2Q",
//   authDomain: "products-n-cart.firebaseapp.com",
//   projectId: "products-n-cart",
//   storageBucket: "products-n-cart.appspot.com",
//   messagingSenderId: "1004531008608",
//   appId: "1:1004531008608:web:e39dd7636b7bedbb04af05",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo5QFgU46-i1K2C1YBH2bBlHqvSJ8qSuc",
  authDomain: "product-asse.firebaseapp.com",
  databaseURL: "https://product-asse-default-rtdb.firebaseio.com",
  projectId: "product-asse",
  storageBucket: "product-asse.firebasestorage.app",
  messagingSenderId: "608447195598",
  appId: "1:608447195598:web:d5835ee5af12b2b838e39f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);