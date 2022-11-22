import React from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  BackgroundContainer,
  MainContainer,
  LeftContainer,
} from "../../styles/styledComps";
import CreatHomePost from "../../components/hostPosting/CreatHomePost";
import Script from "next/script";
import { AuthProvider } from "../../AuthContext/AuthContext";

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
    if (id) {
      const getHome = async (id) => {
        const docRef = doc(db, "homes", id);
        const home = await getDoc(docRef);
        setState(home.data());
      };
      getHome(id);
    }
  }, [id]);

  if (state) {
    return (
      <BackgroundContainer src="homeBG.png">
        <Script
          id="my-script"
          strategy="beforeInteractive"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places`}
        ></Script>
        <AuthProvider>
          <CreatHomePost editState={state} isEdit={true} docId={id} />
        </AuthProvider>
      </BackgroundContainer>
    );
  } else {
    return <div>Loading...</div>;
  }
}
