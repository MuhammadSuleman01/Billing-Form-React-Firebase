import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const FirebaseContext = createContext(null);
const firebaseConfig = {
  apiKey: "AIzaSyAOINejaUqcR7nO5p46fJs1ElmOGnR9HNg",
  authDomain: "billingform-a5879.firebaseapp.com",
  projectId: "billingform-a5879",
  storageBucket: "billingform-a5879.appspot.com",
  messagingSenderId: "271087241252",
  appId: "1:271087241252:web:4edece468e39c52678b0b1",
};
export const useFirebase = () => useContext(FirebaseContext);
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userUpdate, setUserUpdate] = useState("");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        localStorage.setItem("isLoggedIn", true)
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const handleCreateNewListing = async (
    name,
    date,
    productName,
    productPrice,
    productQty
  ) => {
    return await addDoc(collection(firestore, "store"), {
      name,
      date,
      productName,
      productPrice,
      productQty,
      // userId: user.uid,
      // userEmail: user.email,
      // displayName: user.displayName,
    });
  };
  const listAllItems = async () => {
    return await getDocs(collection(firestore, "store"));
  };

  const getCollectionReference = (firestore, collectionName) => {
    return collection(firestore, collectionName);
  };

  const isLoggedIn = localStorage?.getItem('isLoggedIn');

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPass,
        handleCreateNewListing,
        listAllItems,
        isLoggedIn,
        getCollectionReference,
        setUserUpdate,
        userUpdate,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
