import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA7lpU09HEccLHFAUVLhxCmw3B6AVMzyD0",
authDomain: "fir-9c3d6.firebaseapp.com",
projectId: "fir-9c3d6",
storageBucket: "fir-9c3d6.appspot.com",
messagingSenderId: "660655001881",
appId: "1:660655001881:web:cf21dfbaf5acad34683588",
measurementId: "G-H86XN677C3"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };















































// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use








// ://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// apiKey: "AIzaSyA7lpU09HEccLHFAUVLhxCmw3B6AVMzyD0",
// authDomain: "fir-9c3d6.firebaseapp.com",
// projectId: "fir-9c3d6",
// storageBucket: "fir-9c3d6.appspot.com",
// messagingSenderId: "660655001881",
// appId: "1:660655001881:web:cf21dfbaf5acad34683588",
// measurementId: "G-H86XN677C3"
// };

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = app.firestore();

// export { auth, db};