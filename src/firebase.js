import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB5NkSBlwGdZBAHRiUBdvTEeU-FR6kzSUg",
    authDomain: "app-todolist-test.firebaseapp.com",
    databaseURL: "https://app-todolist-test.firebaseio.com",
    projectId: "app-todolist-test",
    storageBucket: "",
    messagingSenderId: "851463279086",
    appId: "1:851463279086:web:22729906f755de44dafeff"
};

firebase.initializeApp(config);

export default firebase;

