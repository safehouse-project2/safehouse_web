import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import EvacueePosting from "../components/evacueePosting/evacueePosting";
import Navbar from "../components/D3Components/Navbar/Navbar";

const Evacuee = () => {
  const [home, setHome] = useState([
    {
      address: "",
      lat: 49.2835,
      lng: -123.1153,
    },
  ]);

  useEffect(() => {
    const homeRef = collection(db, "homes");
    const q = query(homeRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setHome(
        querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  const submitHandler = async ({
    country,
    province,
    city,
    address,
    lat,
    lng,
  }) => {
    if (home?.hasOwnProperty("timestamp")) {
      //update the home
      const docRef = doc(db, "home", home.id);
      const homeUpdated = { home, timestamp: serverTimestamp() };
      updateDoc(docRef, homeUpdated);
      setHome({
        address: "",
        lat: "",
        lng: "",
        country: "",
        province: "",
        city: "",
      });
    } else {
      // create new home
      const collectionRef = collection(db, "home");
      const docRef = await addDoc(collectionRef, {
        country,
        province,
        city,
        address,
        lat,
        lng,
        timestamp: serverTimestamp(),
      });
      setHome({
        address: "",
        lat: "",
        lng: "",
        country: "",
        province: "",
        city: "",
      });
    }
  };

  return (
    <div>
      <EvacueePosting onSubmit={submitHandler} home={home} setHome={setHome} />
      <Navbar />
    </div>
  );
};
export default Evacuee;
