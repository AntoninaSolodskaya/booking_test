import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA7II2GPygyvV99S4zcaFCHslSboVJSU-I",
  authDomain: "booking-test-d973c.firebaseapp.com",
  databaseURL: "https://booking-test-d973c.firebaseio.com",
  projectId: "booking-test-d973c",
  storageBucket: "booking-test-d973c.appspot.com",
  messagingSenderId: "407172507346"
};

// firebase.initializeApp(config);

// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();

// export default firebase;

firebase.initializeApp(config);
export default firebase;