/**
 * Firebase Context
 *
 * Generally, React context are used to share data across multiple components
 *
 * This one will handle any firebase data. This will grow in more functionality if we want to do more stuff with firebase
 *
 * For now anything we do with Firebase will go through here. Eventually we might want to refactor firebase as its own utility
 * and import it here
 */
import React, { useEffect, useState } from "react";
import Firebase from "firebase";
import "firebase/auth";
import { FIREBASE_CONFIG } from "../config";

// initialize firebase here
const firebaseApp = Firebase.initializeApp(FIREBASE_CONFIG);
const firebaseAuth = firebaseApp.auth();

// create context
const FirebaseContext = React.createContext({
  firebaseObj: firebaseApp,
  firebaseAuth,
});

// Context have Provider (which provide the value) and Consumer (which consumer/use the value)
// We will define the Provider here
// children are a special props in React. It is whatever between tags (<div>(this is children)</div>)
export const FirebaseContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    // get current user
    const unsubscribedFn = firebaseAuth.onAuthStateChanged(currentUser => {
      setCurrentUser(currentUser || null);
    });
    return () => {
      unsubscribedFn();
    };
  }, []);
  return (
    <FirebaseContext.Provider
      value={{
        firebaseObj: firebaseApp,
        auth: {
          authObj: firebaseAuth,
          signIn: async (email, password) => firebaseAuth.signInWithEmailAndPassword(email, password),
          signUp: async (email, password) => firebaseAuth.createUserWithEmailAndPassword(email, password),
          currentUser,
        },
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
