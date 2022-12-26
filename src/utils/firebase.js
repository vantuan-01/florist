// Import the functions you need from the SDKs you need

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    apiKey: 'AIzaSyAvfedWs6ucRauueppjq8t_MFFlxPS8HAw',
    authDomain: 'florist-67cb0.firebaseapp.com',
    projectId: 'florist-67cb0',
    storageBucket: 'florist-67cb0.appspot.com',
    messagingSenderId: '895605952905',
    appId: '1:895605952905:web:517178fb8530d7f27a5158',
    measurementId: 'G-GNFEEYF4J7',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
