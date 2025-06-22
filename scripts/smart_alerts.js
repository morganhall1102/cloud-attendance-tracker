// Simple logic to flag attendance issues
function analyzeAttendanceRecord(checkInTime, checkOutTime) {
  const alerts = [];

  const checkIn = new Date(checkInTime);
  const checkOut = new Date(checkOutTime);
  const workHours = (checkOut - checkIn) / (1000 * 60 * 60); // Convert ms to hours

  if (checkIn.getHours() > 9) {
    alerts.push("Late Arrival");
  }

  if (checkOut.getHours() < 15) {
    alerts.push("Early Departure");
  }

  if (workHours < 4) {
    alerts.push("Short Workday");
  }

  return alerts;
}

// Example usage
const testCheckIn = "2025-06-22T09:45:00";
const testCheckOut = "2025-06-22T13:00:00";
console.log(analyzeAttendanceRecord(testCheckIn, testCheckOut));
