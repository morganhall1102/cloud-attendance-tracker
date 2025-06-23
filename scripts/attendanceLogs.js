// Import Firebase Firestore
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase_config.js"; // Adjust path if needed

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
