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
      const docRef = doc(db, "homes", id);
      const home = await getDoc(docRef);
      setState(home.data());
    };
    getHome(id);
  }

  return (
    <>
      <div>Address: {state.addressLine1 ? state.addressLine1 : null}</div>
      <div>City: {state.city ? state.city : null}</div>
      <div>Province: {state.province ? state.province : null}</div>
      <div>Postal Code: {state.postalCode ? state.postalCode : null}</div>
      <div>Description: {state.description ? state.description : null}</div>
      <div>Guests: {state.guests}</div>
      <div>bedrooms: {state.bedrooms}</div>
      <div>beds: {state.beds}</div>
      <div>bathrooms: {state.bathrooms}</div>
      <div>kitchen: {state.kitchen}</div>
      <div>parking: {state.parking}</div>
      <div>Washer: {state.washer}</div>
      <div>Dryer: {state.dryer}</div>
      <div>petsAllowed: {state.petsAllowed}</div>
      <div>smokingAllowed: {state.smokingAllowed}</div>
      <div>Wifi: {state.wifi}</div>
      <div>TV: {state.tv}</div>
      <div>AC: {state.airConditioning}</div>
      <div>Heating: {state.heating}</div>
    </>
  );
};
export default DetailPage;
