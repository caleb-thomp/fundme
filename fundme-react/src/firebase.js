import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPkO83JQXkPTmMlyV2dR7h76VMzEgQWC8",
  authDomain: "fundme-1.firebaseapp.com",
  projectId: "fundme-1",
  storageBucket: "fundme-1.appspot.com",
  messagingSenderId: "951570804194",
  appId: "1:951570804194:web:99ac333130db724cdc9dbb",
  measurementId: "G-2M7GRXKV9T",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
