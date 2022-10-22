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
import NavBar from "../../components/Home/NavBar";
import Detail from "../../components/Home/Detail";

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
      const docRef = doc(db, "homes", id);
      const home = await getDoc(docRef);
      setState(home.data());
    };
    getHome(id);
  }

  return (
    <>
      <NavBar />
      <Detail state={state} />
    </>
  );
};
export default DetailPage;
