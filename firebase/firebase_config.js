// Import Firebase functions via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB...your_key_here",
  authDomain: "cloud-attendance-tracker.firebaseapp.com",
  databaseURL: "https://cloud-attendance-tracker.firebaseio.com",
  projectId: "cloud-attendance-tracker",
  storageBucket: "cloud-attendance-tracker.appspot.com",
  messagingSenderId: "792669093693",
  appId: "1:792669093693:web:cd74017f23e41a5eafb504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the Firestore instance so you can import it elsewhere
export { db, firebaseConfig };
