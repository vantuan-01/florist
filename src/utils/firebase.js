import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: 'AIzaSyDt5Y3ibRNehHE2qPD1vG0LZiGtw3zN1w8',
    authDomain: 'florist-firebase.firebaseapp.com',
    projectId: 'florist-firebase',
    storageBucket: 'florist-firebase.appspot.com',
    messagingSenderId: '209344269249',
    appId: '1:209344269249:web:dfdad5c825158908377d40',
    measurementId: 'G-JFVXSJ9CEE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// const colRef = collection(db, 'cart');

// getDocs(colRef).then((snapshot) => {
//     let cart = [];
//     snapshot.docs.forEach((doc) => {
//         cart.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(cart);
// });
