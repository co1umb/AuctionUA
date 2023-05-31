import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVAYgplPsMjChhB0-K2oXxqBnirKO9JeM",
  authDomain: "auctionua.firebaseapp.com",
  projectId: "auctionua",
  storageBucket: "auctionua.appspot.com",
  messagingSenderId: "1061440105729",
  appId: "1:1061440105729:web:b8ab6d758c7dcb29e33f00"
};
// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
