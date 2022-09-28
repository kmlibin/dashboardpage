import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";

//firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, setDoc, doc } from "firebase/firestore";
import { auth, storage, database } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, zip, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (!res) {
        throw new Error("Could not complete signup");
      }
      // upload thumbnail
      const storageRef = ref(
        storage,
        `thumbnails/uid${res.user.uid}/${thumbnail.name}`
      );

      const snapShot = await uploadBytes(storageRef, thumbnail);
      const imgUrl = await getDownloadURL(ref(storage, storageRef));
      await updateProfile(user, {
        displayName,
        uid: user.uid,
        zip,
        photoURL: imgUrl,
      });

      //create a user document
      const usersCollectionRef = doc(database, "users", res.user.uid);
      await setDoc(usersCollectionRef, {
        online: true,
        displayName,
        zip,
        uid: user.uid,
        photoURL: imgUrl,
      });

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
