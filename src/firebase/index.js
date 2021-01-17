import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDPWO3M7d_Qrs-d6WWL2R-OfHCC8eXbfug",
    authDomain: "ecommerce-react-sva.firebaseapp.com",
    projectId: "ecommerce-react-sva",
    storageBucket: "ecommerce-react-sva.appspot.com",
    messagingSenderId: "132330224285",
    appId: "1:132330224285:web:afd8978db5dd86eff03274",
    measurementId: "G-CGR0XW1QCK"
})

export function getFirebase() {

    return app;    
}

export function getFirestore() {

    return firebase.firestore(app);    
}
