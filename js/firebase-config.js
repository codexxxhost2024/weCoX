// js/firebase-config.js

// Import the functions you need from the SDKs (v9+ Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// UNCOMMENT THIS LINE and import Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdZM_2Dgibm-S9pftZBUqOdGVup9oNhmU", // This key identifies your project to Firebase servers.
  authDomain: "ai-connect-2nbpnn.firebaseapp.com",
  databaseURL: "https://ai-connect-2nbpnn-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ai-connect-2nbpnn",
  storageBucket: "ai-connect-2nbpnn.appspot.com",
  messagingSenderId: "704482029158",
  appId: "1:704482029158:web:ca0bf5088382e102e447a7"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize other Firebase services if you imported them:
const database = getDatabase(app);
// UNCOMMENT THIS LINE and initialize Firestore
const db = getFirestore(app); // Common alias for Firestore

// Initialize Storage if needed:
// const storage = getStorage(app);

// Export the initialized services
// Make sure to export the Firestore instance (aliased as 'db')
export { app, auth, database, db };

// If using storage, export it as well:
// export { app, auth, database, db, storage };