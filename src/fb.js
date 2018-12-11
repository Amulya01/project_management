import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPiip47Ki1_n1Lul02OFnKDNgwWH-GAZk",
  authDomain: "dashboard-335aa.firebaseapp.com",
  databaseURL: "https://dashboard-335aa.firebaseio.com",
  projectId: "dashboard-335aa",
  storageBucket: "dashboard-335aa.appspot.com",
  messagingSenderId: "947817800295"
};
//firebase.initializeApp(config);
//const db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true });

//export default db;
export default (!firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore());
