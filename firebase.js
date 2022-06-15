// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbjQ7xbRjjVAOlpVJOeOPXhrBDWHTOvqM",
  authDomain: "incribo-3c80a.firebaseapp.com",
  projectId: "incribo-3c80a",
  storageBucket: "incribo-3c80a.appspot.com",
  messagingSenderId: "127246902801",
  appId: "1:127246902801:web:d34cf81046315ef240f3b0",
  measurementId: "G-VRDNBJ1PX9",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
