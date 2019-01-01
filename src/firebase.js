import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCNHLSujb4Bv5CiAIrn8-BsPZbQAWOSx8A',
  authDomain: 'vuejs-stock-trader-c806f.firebaseapp.com',
  databaseURL: 'https://vuejs-stock-trader-c806f.firebaseio.com',
  projectId: 'vuejs-stock-trader-c806f',
  storageBucket: 'vuejs-stock-trader-c806f.appspot.com',
  messagingSenderId: '863907128085',
};

const firebaseapp = firebase.initializeApp(config);

export const db = firebaseapp.database();
export const stocksRef = db.ref('stocks');
export const stockPortfolioRef = db.ref('stockPortfolio');
export const fundsRef = db.ref('funds');
export const firestore = firebaseapp.firestore();