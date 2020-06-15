import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyApwZLEDQ3zKV-FCpaalxlLO1yABUnwDPY",
  authDomain: "tenedores-8dfa4.firebaseapp.com",
  databaseURL: "https://tenedores-8dfa4.firebaseio.com",
  projectId: "tenedores-8dfa4",
  storageBucket: "tenedores-8dfa4.appspot.com",
  messagingSenderId: "1089925997097",
  appId: "1:1089925997097:web:56a10af748e5614001f238",
  measurementId: "G-7Z49ZX3P3B",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
