import * as firebase from "firebase/app"
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDbFlW9DbajKcZ3lfyPljxtjg79h1wnhgA",
    authDomain: "gallary-d9e20.firebaseapp.com",
    databaseURL: "https://gallary-d9e20.firebaseio.com",
    projectId: "gallary-d9e20",
    storageBucket: "gallary-d9e20.appspot.com",
    messagingSenderId: "372327530021",
    appId: "1:372327530021:web:1fc5979ce0ce215aa109cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage,projectFirestore};