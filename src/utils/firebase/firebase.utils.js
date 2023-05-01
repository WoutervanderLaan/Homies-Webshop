import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1BBCEL7BaaqAEUzelO0Q2mPc-FOQpHJc",

  authDomain: "crwn-clothing-db-ce33a.firebaseapp.com",

  projectId: "crwn-clothing-db-ce33a",

  storageBucket: "crwn-clothing-db-ce33a.appspot.com",

  messagingSenderId: "752038421661",

  appId: "1:752038421661:web:442e5df03473e74b7c2074",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  try {
    const userDocRef = doc(db, "users", userAuth.uid);
    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    // console.log(userSnapshot);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    }
  } catch (err) {
    console.log(`Error: ${err.message}}`);
  }
};
