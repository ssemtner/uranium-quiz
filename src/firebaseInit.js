import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCnNgbmMWdwbj8eSSQQjUhI_h95bAo3b9Q",
    authDomain: "uranium-quiz.firebaseapp.com",
    projectId: "uranium-quiz",
    storageBucket: "uranium-quiz.appspot.com",
    messagingSenderId: "235825481480",
    appId: "1:235825481480:web:0b9183989c49db68ca0ebd"
}

export default firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()