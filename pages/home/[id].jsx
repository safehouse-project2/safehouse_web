import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "/firebase";

const DetailPage = () => {
  const [state, setState] = useState({
    address: "",
    lat: "",
    lng: "",
    country: "",
    province: "",
    city: "",
  });
  const router = useRouter();
  const id = router.query.id;

  if (id) {
    const getHome = async id => {
      const docRef = doc(db, "home", id);
      const home = await getDoc(docRef);
      setState(home.data());
    };
    getHome(id);
  }

  return (
    <>
      <div>{state.address}</div>
    </>
  );
};
export default DetailPage;
