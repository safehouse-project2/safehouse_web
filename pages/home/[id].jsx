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
import Detail from "../../components/Home/Detail";
import NavBar from "../../components/Home/NavBar";

const DetailPage = () => {
  const [state, setState] = useState({
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
  });
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    if (id) {
      const getHome = async id => {
        const docRef = doc(db, "homes", id);
        const home = await getDoc(docRef);
        setState(home.data());
      };
      getHome(id);
    }
  }, [id]);

  return (
    <div>
      <Detail key={state?.id} state={state}>
        {!state && <div>loading...</div>}
      </Detail>
    </div>
  );
};
export default DetailPage;
