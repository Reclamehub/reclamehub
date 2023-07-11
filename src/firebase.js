// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZPsMFCgsjnpYDxoiE7DCbWIFgyQi93wQ",
  authDomain: "reclamehub-bd81b.firebaseapp.com",
  projectId: "reclamehub-bd81b",
  storageBucket: "reclamehub-bd81b.appspot.com",
  messagingSenderId: "741131928267",
  appId: "1:741131928267:web:070964d42b15dba39b514e",
  measurementId: "G-5EGV1R15GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);