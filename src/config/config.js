import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: "https://textbyeleven-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "textbyeleven",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: "1:137569248730:web:966d7d429fee98f2dc8ce3",
    measurementId: process.env.MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const analytics = getAnalytics(app)

export { db, analytics }
