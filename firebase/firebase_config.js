const firebaseConfig = {
  apiKey: "AIzaSyB...your_key_here",
  authDomain: "cloud-attendance-tracker.firebaseapp.com",
  databaseURL: "https://cloud-attendance-tracker.firebaseio.com",
  projectId: "cloud-attendance-tracker",
  storageBucket: "cloud-attendance-tracker.appspot.com",
  messagingSenderId: "792669903693",
  appId: "1:792669903693:web:cd74017f23e41a5eafb504"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
