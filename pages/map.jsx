import GetGoogleMap from "../components/locations/GetGoogleMap";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "/firebase";
import styled from "styled-components";

const GradDiv = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 33.98%,
    rgba(0, 0, 0, 0.85) 100%
  );
  width: 100vw;
  height: 65vh;
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  pointer-events: none;
`;

export default function Map() {
  const [state, setState] = useState([
    {
      lat: 0,
      lng: 0,
    },
  ]);

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
    <div className="flex w-[100vw] m-auto">
      <GradDiv>
        <p className="absolute z-[999] text-[#f5f5f5] text-xl px-5 ">
          Click on any icon below to see details
        </p>
      </GradDiv>
      <GetGoogleMap hostInfo={state} isBothClicked={true} height="96vh" />
    </div>
  );
}
