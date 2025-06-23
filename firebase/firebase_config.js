// Import Firebase functions via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjLTLGX4RXtPK_wGeN5XnM3yambFjyqrc",
  authDomain: "cloud-attendance-tracker.firebaseapp.com",
  projectId: "cloud-attendance-tracker",
  storageBucket: "cloud-attendance-tracker.firebasestorage.app",
  messagingSenderId: "792669903693",
  appId: "1:792669903693:web:cd74017f23e41a5eafb504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the Firestore instance so you can import it elsewhere
export { db, firebaseConfig };
