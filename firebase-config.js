// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdyIV6Bf69zyJ6w63hHgJY2Dc4WTOElo",
  authDomain: "apoorvverma-30b09.firebaseapp.com",
  projectId: "apoorvverma-30b09",
  storageBucket: "apoorvverma-30b09.appspot.com",
  messagingSenderId: "989685500217",
  appId: "1:989685500217:web:afaa91c44c166c0a6940e8",
  measurementId: "G-KYKQ7HQB2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);