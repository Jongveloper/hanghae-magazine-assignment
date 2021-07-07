import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJe9GqdKUNxZ1WGQ6WSNhMSbA0bo_uF4o",
  authDomain: "hanghae-image-community.firebaseapp.com",
  projectId: "hanghae-image-community",
  storageBucket: "hanghae-image-community.appspot.com",
  messagingSenderId: "758999547064",
  appId: "1:758999547064:web:e194635bc6f5387961084d",
  measurementId: "G-TP6NWGC80F",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;

const auth = firebase.auth();

const firestore = firebase.firestore();

const storage = firebase.storage();
export { auth, apiKey, firestore, storage };