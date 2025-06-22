// Assumes Firebase is already initialized

// Reference to the database collection
const db = firebase.firestore();
// Simulated check-in function
function checkInUser(userId) {
  const timestamp = new Date();

  db.collection("checkins").add({
    userId: userId,
    time: timestamp
  })
  .then(() => {
    console.log("User checked in:", userId);
  })
  .catch((error) => {
    console.error("Error checking in user:", error);
  });
}

// Example call
checkInUser("student_001");
