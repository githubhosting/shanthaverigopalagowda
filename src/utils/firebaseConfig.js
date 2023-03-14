// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRSRvZa40f49r9GhcTqWHJOOUkS09hg5M",
  authDomain: "shanthaverigopalagowda-8aa2d.firebaseapp.com",
  projectId: "shanthaverigopalagowda-8aa2d",
  storageBucket: "shanthaverigopalagowda-8aa2d.appspot.com",
  messagingSenderId: "905421208104",
  appId: "1:905421208104:web:b4bd3d62430e9f294e931d",
  measurementId: "G-F81RMYZZ6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);