
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
    apiKey: process.env.NEXT_APP_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.NEXT_APP_FIREBASE_APP_ID
});


 const firestore = app.firestore()
 
export const database ={
    folders: firestore.collection('folders'),
    products: firestore.collection('products'),
    posts: firestore.collection('posts'),
    files: firestore.collection('files'),
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}




// export const auth = firebase.auth(app);
export default app;
