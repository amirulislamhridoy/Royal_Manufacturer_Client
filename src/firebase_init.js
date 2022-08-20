// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyCQCQrsGp-zOW4Vse_HL__jJg0Ea8NRbUM",
//   authDomain: "email-password-auth3-2e8cd.firebaseapp.com",
//   projectId: "email-password-auth3-2e8cd",
//   storageBucket: "email-password-auth3-2e8cd.appspot.com",
//   messagingSenderId: "112553976392",
//   appId: "1:112553976392:web:fb1eb6f0262cd5ae19ae7d"