// scripts/patternDetection.js
import { db } from "../firebase/firebase_config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// -------------------------
// 🔍 Pattern Detection Stubs (Weeks 7–8 setup)
// -------------------------

/**
 * Detects users who are repeatedly late
 * To be implemented in Week 9
 */
export function detectChronicLateness(logs) {
  // TODO: Count how many times a user is marked late
  // Suggest flag if user is late more than 3 times in 5 days
  return []; // return list of user IDs
}

/**
 * Detects users who frequently miss check-outs
 */
export function detectMissingCheckOuts(logs) {
  // TODO: Check for Check-Ins without corresponding Check-Outs
  return []; // return user IDs with incomplete logs
}

/**
 * Detects abnormal time patterns (early leave, mid-day disappearance)
 */
export function detectOutliers(logs) {
  // TODO: Compare user behavior against average work time
  return []; // return potential anomalies
}

// -------------------------
// ✅ Sample fetch + log summary
// -------------------------

async function analyzePatterns() {
  const logsRef = collection(db, "attendanceLogs");
  const snapshot = await getDocs(logsRef);
  const logs = snapshot.docs.map(doc => doc.data());

  const lateCounts = {};
  logs.forEach(log => {
    if (log.userId && log.type === "Check-In" && log.isLate) {
      lateCounts[log.userId] = (lateCounts[log.userId] || 0) + 1;
    }
  });

  console.log("🔍 Late Check-In Counts:", lateCounts);

  // Eventually call detection stubs here
  // e.g., detectChronicLateness(logs), detectMissingCheckOuts(logs)
}

analyzePatterns();