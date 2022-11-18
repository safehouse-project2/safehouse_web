import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainContainer, LeftContainer } from "../styles/styledComps";
import Navbar from "../components/D3Components/Navbar/Navbar";
import { AuthProvider } from "../AuthContext/AuthContext";
import HostDetail from "../components/Host/detail";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function HostHome() {
  const [state, setState] = useState({
    addressLine1: "",
  });

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
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center">
        <MainContainer>
          <LeftContainer>
            <HostDetail state={state} />
          </LeftContainer>
        </MainContainer>
        <Navbar />
      </div>
    </AuthProvider>
  );
}
