import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIodnC05kgtTF5zOxc8rsKRcsmvZ5ebaE",
  authDomain: "chat-8da96.firebaseapp.com",
  projectId: "chat-8da96",
  storageBucket: "chat-8da96.appspot.com",
  messagingSenderId: "989545091563",
  appId: "1:989545091563:web:749b98d2c66b7e3c16c9ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
