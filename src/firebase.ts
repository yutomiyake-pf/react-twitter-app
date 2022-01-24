import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6k_wQ8N8yuy3vPQ5QiyV8WOyydEzEWoM",
  authDomain: "twitter-app-6fafd.firebaseapp.com",
  dabaseURL: "https://twitter-app-6fafd.firebaseio.com",
  projectId: "twitter-app-6fafd",
  storageBucket: "twitter-app-6fafd.appspot.com",
  messagingSenderId: "344386840560",
  appId: "1:344386840560:web:f638ead05b8c436e6f1f35",
};

const firebaseAPP = firebase.initializeApp(firebaseConfig);

export const db = firebaseAPP.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
