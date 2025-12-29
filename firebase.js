import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCc_IdarLPXyEAcXfFBvvw2Qi55qHwLaU4",
  authDomain: "upsc-prep-754d4.firebaseapp.com",
  projectId: "upsc-prep-754d4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
