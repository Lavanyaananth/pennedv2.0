import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyApwHoT5a9R-770Vn-CtEteyLdOQTF1Pyw",
  authDomain: "pennedthoughts-c768d.firebaseapp.com",
  projectId: "pennedthoughts-c768d",
  storageBucket: "pennedthoughts-c768d.appspot.com",
  messagingSenderId: "699118108935",
  appId: "1:699118108935:web:a65a52392f3511481c45a2",
  measurementId: "G-4Q4DDLDPT9",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
