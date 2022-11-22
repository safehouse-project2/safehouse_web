import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "/firebase";
import Detail from "../../components/Home/Detail";
import { AuthProvider } from "../../AuthContext/AuthContext";

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
      <AuthProvider>
        <Detail key={state?.id} state={state}>
          {!state && <div>loading...</div>}
        </Detail>
      </AuthProvider>
    </div>
  );
};
export default DetailPage;
