import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDvwCZTdVM-YYS2k6zr69-FmaKlfTlrWNc",
  authDomain: "days-habit-yk.firebaseapp.com",
  databaseURL: "https://days-habit-yk.firebaseio.com",
  projectId: "days-habit-yk",
  storageBucket: "days-habit-yk.appspot.com",
  messagingSenderId: "1015482723357"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const db = firebase.database()
export const firebaseAuth = firebase.auth
export const facebookProvider = firebase.auth.FacebookAuthProvider
//export const facebookProvider = firebase.auth.FacebookAuthProvider()
