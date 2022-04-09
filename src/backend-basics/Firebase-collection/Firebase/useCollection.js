import { db } from "../Firebase/firebase";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { serverTimestamp } from "firebase/database";
const useCollection = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(db, path);
    const unsub = onSnapshot(collectionRef, (snapshot) => {
      let document = [];
      snapshot.docs.map((doc) => {
        document.push({
          ...doc.data(),
          id: doc.id,
          timestamp: serverTimestamp(),
        });
        setData(document);
        setLoading(false);
      });
    });
    return () => unsub();
  }, [path]);
  return { data, loading };
};

export default useCollection;
