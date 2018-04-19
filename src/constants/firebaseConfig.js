import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA2j_GTqhtVKbXRVxU4b-o-ZDsVGwaR1CM",
  authDomain: "online-resume-4f9ce.firebaseapp.com",
  databaseURL: "https://online-resume-4f9ce.firebaseio.com",
  projectId: "online-resume-4f9ce",
  storageBucket: "online-resume-4f9ce.appspot.com",
  messagingSenderId: "570421257083"
};
firebase.initializeApp(config);

var db = firebase.database();

export { db }