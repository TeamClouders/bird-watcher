import firebase from 'firebase'
var config = {
    //================Started ================//
    apiKey: "AIzaSyCXs2qMUazezjisKUS2ICNAKbasCkJdGDQ",
    authDomain: "react-sample-17caa.firebaseapp.com",
    databaseURL: "https://react-sample-17caa.firebaseio.com",
    projectId: "react-sample-17caa",
    storageBucket: "react-sample-17caa.appspot.com",
    messagingSenderId: "411422279834"

    //================== Ended ====================//
};
// if (!firebase.apps.length) {
    firebase.initializeApp(config);
// }

export const database = firebase.database();
export const storage = firebase.storage();
