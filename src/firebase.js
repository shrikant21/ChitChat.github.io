import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGeJYi5ze2tSvmuyjyhY7l0-fZbfk-78Y",
    authDomain: "facebook-messenger-4524f.firebaseapp.com",
    databaseURL: "https://facebook-messenger-4524f.firebaseio.com",
    projectId: "facebook-messenger-4524f",
    storageBucket: "facebook-messenger-4524f.appspot.com",
    messagingSenderId: "802923543827",
    appId: "1:802923543827:web:0d8d95e2dfcd0275516ee6",
    measurementId: "G-0DJDKYVLFP"
});
const db = firebaseApp.firestore();
export default db;