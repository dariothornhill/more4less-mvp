import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyChswt_LVNufO_cvl2_13fvPHyikGB7n2c',
  authDomain: 'price-drop-app.firebaseapp.com',
  databaseURL: 'https://price-drop-app.firebaseio.com',
  projectId: 'price-drop-app',
  storageBucket: 'price-drop-app.appspot.com',
  messagingSenderId: '494656547867',
};

const fire = firebase.initializeApp(config);
export default fire;
