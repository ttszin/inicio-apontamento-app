import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBWLmysZemeJSLdU9rkWa9-Uv2Qx0P4LkQ",
    authDomain: "app-apontamento-9877a.firebaseapp.com",
    projectId: "app-apontamento-9877a",
    storageBucket: "app-apontamento-9877a.appspot.com",
    messagingSenderId: "35551378311",
    appId: "1:35551378311:web:f4121eaf18b215cbf8f122",
    measurementId: "G-2R43HN0YB2"
};

    const firebaseApp = firebase.initializeApp(firebaseConfig)
   
    const db = firebase.firestore();

    const auth = firebase.auth();

    const provider = new firebase.auth.GoogleAuthProvider();

    export {auth,provider};
    export default {db};