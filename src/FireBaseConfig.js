// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkqSwvL7s4c3rVXeyy3WOMQq4p1tGp1QQ",
  authDomain: "ram-firegram-d5532.firebaseapp.com",
  projectId: "ram-firegram-d5532",
  storageBucket: "ram-firegram-d5532.appspot.com",
  messagingSenderId: "466913906631",
  appId: "1:466913906631:web:8a53874b3f1df4471c13e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, collection, getDocs, storage, ref, listAll, getDownloadURL };
