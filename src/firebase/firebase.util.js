import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC7Y15wEXzxnW_O-TfxNE47RIKEGWCCWSY',
  authDomain: 'react-clothing-eda89.firebaseapp.com',
  databaseURL: 'https://react-clothing-eda89.firebaseio.com',
  projectId: 'react-clothing-eda89',
  storageBucket: 'react-clothing-eda89.appspot.com',
  messagingSenderId: '79894629398',
  appId: '1:79894629398:web:24d9366e5e375ee8a2b937',
  measurementId: 'G-23N87D7KZR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
