import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDdwiiDZ0GFR_W2hi_bRhjpvkfHp43C_6U",
  authDomain: "loginapp-99e5c.firebaseapp.com",
  projectId: "loginapp-99e5c",
  storageBucket: "loginapp-99e5c.appspot.com",
  messagingSenderId: "1042778593051",
  appId: "1:1042778593051:web:d34410274c1d3d7bffe5be",
  measurementId: "G-ZTBYX121KN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);