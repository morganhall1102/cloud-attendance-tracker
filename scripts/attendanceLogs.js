// Assumes Firebase is already initialized

const db = firebase.firestore();
// Simulated check-in function
function checkInUser(userId, type) {
  const timestamp = new Date();

  db.collection("attendanceLogs").add({
    userId: userId,
    time: timestamp,
    type: type
  })
  .then(() => {
    console.log("User checked in:", userId, "Type:", type);
  })
  .catch((error) => {
    console.error("Error checking in user:", error);
  });
}

