/*there are several libraries in firebase but we only need firebase auth and firestore 
but in any case we always have to import basic firebase library first */

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/*this is the config object we get from firebase when we setup our project on firebase */

const config = {
  apiKey: "AIzaSyDneu2qvT9tmMXsYVGfwXQWozF7vk0YkaQ",
  authDomain: "garment-geeks.firebaseapp.com",
  databaseURL: "https://garment-geeks.firebaseio.com",
  projectId: "garment-geeks",
  storageBucket: "garment-geeks.appspot.com",
  messagingSenderId: "214030596434",
  appId: "1:214030596434:web:8db0d5f179f7c13ee0628b",
  measurementId: "G-WNHN6FV89W",
};

//async because we are making an api request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the userAuth object is null that is the user is not signed-In then we return from the function.

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //we can only call set get update and delete method on userRef and not on snapshot because snapshot is just representing data.

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
/*understand the code  */
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
