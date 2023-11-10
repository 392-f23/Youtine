
import { initializeApp } from "firebase/app";
import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import {v4 as uuidv4} from 'uuid';

const firebaseConfig = {
    apiKey: "AIzaSyDSqF3QLXoVooEnD4XO9LGVkMFTMFXnebY",
    authDomain: "youtine-7ea21.firebaseapp.com",
    databaseURL: "https://youtine-7ea21-default-rtdb.firebaseio.com",
    projectId: "youtine-7ea21",
    storageBucket: "youtine-7ea21.appspot.com",
    messagingSenderId: "925533623485",
    appId: "1:925533623485:web:588b4af13f4ff2fb9d93d4"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};
const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const useRoutineInsert = () => {
  const [result, setResult] = useState();
  const insertData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)));
  }, [database, path]);

  return [insertData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

export const firebaseSignOut = () => signOut(getAuth(firebase));

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};