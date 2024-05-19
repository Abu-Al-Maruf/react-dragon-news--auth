import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbcgYCL1DYMGrGLtfzANvur4pFEOP1wq0",
  authDomain: "react-dragon-news--auth.firebaseapp.com",
  projectId: "react-dragon-news--auth",
  storageBucket: "react-dragon-news--auth.appspot.com",
  messagingSenderId: "241131750998",
  appId: "1:241131750998:web:6abf94fe680377b4219df7",
};

const app = initializeApp(firebaseConfig);

export default app;
