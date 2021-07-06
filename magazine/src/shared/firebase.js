import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBy40JawiWiaeBPs8oMvbZDD4ik6mztXN0",
    authDomain: "hangahe-magazine.firebaseapp.com",
    projectId: "hangahe-magazine",
    storageBucket: "hangahe-magazine.appspot.com",
    messagingSenderId: "33420224775",
    appId: "1:33420224775:web:2f70377aca51da7def3da2",
    measurementId: "G-GSRHQXXWJ6",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};