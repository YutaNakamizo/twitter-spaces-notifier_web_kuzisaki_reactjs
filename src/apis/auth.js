import {
  app,
} from '~/apis/firebase';
import {
  getAuth,
  TwitterAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut as signOut_firebase,
} from "firebase/auth";

const auth = getAuth();
const provider = new TwitterAuthProvider();

export const signIn = () => {
  signInWithRedirect(auth, provider);
  return;
};

export const handleAuthStateChange = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      return resolve(user);
    }, err => {
      return reject(err);
    });
  });
};

export const signOut = () => {
  signOut_firebase(auth).then(() => {
    return;
  }).catch(err => {
    throw err;
  });
};

