import { ref, firebaseAuth, facebookProvider } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function facebookAuth () {
  //let provider = firebaseAuth().facebookProvider()
  let provider = facebookProvider;
  //console.log(provider);
  //provider.addScope('user_birthday')
  firebaseAuth().signInWithRedirect(provider)
  return firebaseAuth().getRedirectResult()
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
