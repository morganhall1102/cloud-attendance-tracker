import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

import { firebaseConfig } from "../firebase/firebase_config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save check-in/out info
export async function checkInUser(userId, type) {
  try {
    await addDoc(collection(db, "attendanceLogs"), {
      userId,
      type,
      time: serverTimestamp()
    });
    console.log(`✅ User checked in: ${userId}, Type: ${type}`);
  } catch (error) {
    console.error("❌ Error checking in user:", error);
  }
}
