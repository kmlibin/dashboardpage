import { useState, useEffect, useRef } from "react";

//firebase import
import { database } from "../firebase/config";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (coll, _q) => {
  const [documents, setDocuments] = useState(null);

  //query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(database, coll);
  
    if (q) {
      ref = query(ref, where(...q));
    }
    const unsub = onSnapshot(ref, (snapshot) => {

      try {
 let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
 setDocuments(results);
      }catch (error) {
        console.log(error("Error fetching from firestore", error))
      }
     
    });

    return () => unsub();
  }, [coll, q]);

  return { documents };
};
