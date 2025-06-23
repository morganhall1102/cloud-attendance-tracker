// Import Firebase modules (via CDN)
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Import Firestore instance
import { db } from "../firebase/firebase_config.js";

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
