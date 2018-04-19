import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCrnWOGZfxfSu73pFfcdSenj3ouhhGYPcs",
  authDomain: "online-resume-274f0.firebaseapp.com",
  databaseURL: "https://online-resume-274f0.firebaseio.com",
  projectId: "online-resume-274f0",
  storageBucket: "",
  messagingSenderId: "392566899839"
};
firebase.initializeApp(config);

var db = firebase.database();

export { db }