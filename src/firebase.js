import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        //Config firebase
        apiKey: "AIzaSyBHe5mZGdd0t1C11okCtidULO7djE9TTnE",
        authDomain: "chat-react-c0154.firebaseapp.com",
        databaseURL: "https://chat-react-c0154.firebaseio.com",
        projectId: "chat-react-c0154",
        storageBucket: "chat-react-c0154.appspot.com",
        messagingSenderId: "9753210932",
        appId: "1:9753210932:web:db17b326af5f971edc5a61"
});

const db = firebaseApp.firestore();

export default db;