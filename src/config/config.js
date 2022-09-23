import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: "AIzaSyAr0clfslEKt7BlPyZOAHt16hXaHqd_XbQ",
    authDomain: "textbyeleven.firebaseapp.com",
    databaseURL: "https://textbyeleven-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "textbyeleven",
    storageBucket: "textbyeleven.appspot.com",
    messagingSenderId: "137569248730",
    appId: "1:137569248730:web:966d7d429fee98f2dc8ce3",
    measurementId: "G-ZHH0BG11BL"
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const analytics = getAnalytics(app)

export { db, analytics }
