import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyCXpXFcZvf1HlSU_sH5y0hwPOrmONs-zYs",
    authDomain: "restarent-2e932.firebaseapp.com",
    projectId: "restarent-2e932",
    storageBucket: "restarent-2e932.appspot.com",
    messagingSenderId: "815830792710",
    appId: "1:815830792710:web:325149e2a5219c1d1ea187",
    measurementId: "G-3C8JGVVPYM"
  }
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};