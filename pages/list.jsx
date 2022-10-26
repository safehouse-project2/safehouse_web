import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "/firebase";
import PostList from "../components/Home/PostList";

const List = () => {
  const [state, setState] = useState([
    {
      address: "",
      lat: "",
      lng: "",
      country: "",
      province: "",
      city: "",
      guests: "",
      bedrooms: "",
      beds: "",
      baths: "",
    },
  ]);
  const router = useRouter();
  useEffect(() => {
    const homeRef = collection(db, "homes");
    const q = query(homeRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setState(
        querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  console.log(state);

  return (
    <>
      <PostList state={state} />
    </>
  );
};
export default List;
