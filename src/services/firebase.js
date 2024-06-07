import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2lOmTMpMy2gz7H9hATeNH5SSbrab2Tz0",
  authDomain: "airasia-7c240.firebaseapp.com",
  databaseURL: "https://airasia-7c240-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "airasia-7c240",
  storageBucket: "airasia-7c240.appspot.com",
  messagingSenderId: "896902986982",
  appId: "1:896902986982:web:14765907d697cb60098f27",
  measurementId: "G-0ETJEMQ685"
};
const db = firebase.initializeApp(firebaseConfig);

export {db};