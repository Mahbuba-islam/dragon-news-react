// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARRtazW9EAg2ngoQwaM2bYBfforfblflY",
  authDomain: "dragon-news-2981f.firebaseapp.com",
  projectId: "dragon-news-2981f",
  storageBucket: "dragon-news-2981f.firebasestorage.app",
  messagingSenderId: "920894430695",
  appId: "1:920894430695:web:df2687d59d251093b77142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);