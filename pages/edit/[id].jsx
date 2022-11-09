import React from "react";
import { db } from "../../firebase";
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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EditPostById() {
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
  const id = router.query.id;
  useEffect(() => {
      const getHome = async (id) => {
        const docRef = doc(db, "homes", id);
        const home = await getDoc(docRef);
        setState(home.data());
      }
      getHome(id);
  }, []);
  console.log("findUser", state);

  return (
    <div>
      <h1>Edit Post By Id</h1>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   const docRef = doc(db, "homes", id);
//   const home = await getDoc(docRef);
//   const data = home.data();
//   console.log(home);
//   return {
//     props: {
//       id,
//     },
//   };
// }
