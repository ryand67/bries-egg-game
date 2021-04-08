import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJid2DwDOG_gyqs4dZ_EyW7GteZVXcW9Y",
    authDomain: "egg-game-f059c.firebaseapp.com",
    projectId: "egg-game-f059c",
    storageBucket: "egg-game-f059c.appspot.com",
    messagingSenderId: "47179468164",
    appId: "1:47179468164:web:7ebb2eaae42f74f38261d1"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const fb = {
    db,
    auth,
    provider
}

export default fb;