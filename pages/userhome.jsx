import AppText from "../components/D3Components/AppText/AppText";
import Input from "../components/D3Components/Input/Input";
import Slider from "../components/D3Components/Slider/Slider";
import { BackgroundContainer, MainContainer } from "../styles/styledComps";
import SearchIcon from "@mui/icons-material/Search";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from "../components/D3Components/Navbar/Navbar";
import Image from "../components/D3Components/Image/ImageComp";
import { useState, useEffect, useReducer } from "react";
import { useRouter } from "next/router";
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
import { db } from "/firebase";
import GetGoogleMap from "../components/locations/GetGoogleMap";
// import SliderFull from "../components/D3Components/Slider/SliderFull";

export default function UserHome({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isBothClicked, setIsBothClicked] = useState(false);
  const [state, setState] = useState([
    {
      homeType: "",
      description: "",

      addressLine1: "",
      addressLine2: "",
      city: "",
      province: "",
      postalCode: "",

      guests: 0,
      bedrooms: 0,
      beds: 0,
      bathrooms: 0,
      kitchen: 0,
      parking: 0,

      washer: "yes",
      dryer: "yes",
      petsAllowed: "yes",
      smokingAllowed: "yes",

      wifi: "yes",
      tv: "yes",
      airConditioning: "yes",
      heating: "yes",

      image: "",
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
  const selectHandler = e => {
    switch (e.target.value) {
      case "Wildfires":
        setIsBothClicked(false);
        return setIsClicked(false);
      case "Safehouses":
        setIsBothClicked(false);
        return setIsClicked(true);
      case "Both":
        return setIsBothClicked(true);
      default:
        return "Both";
    }
  };

  return (
    <div>
      <BackgroundContainer src="">
        <MainContainer margin="0px 0px 30px 0px">
          <Input
            label="Search here"
            variant="outlined"
            icon={<SearchIcon />}
            backgroundColor="#fefefe"
          />
          {/* <SliderFull /> */}
          <div className="flex flex-col gap-2 pt-10">
            <AppText
              txt="Recent Listings"
              fontSize="18px"
              fontWeight="500"
              padding="0px 0px 15px 0px"
            />

            <div className="flex flex-row gap-7 w-full h-full">
              <Slider state={state} />
            </div>

            {/* <AppText
                            txt='1 Bedroom available'
                            fontSize="18px"
                            padding="10px 0px 0px 0px"
                        /> */}
          </div>

          <AppText
            txt="Latest data on wildfires and safehouses"
            fontSize="18px"
            padding="50px 0px 0px 0px"
            fontWeight="500"
          />
          <AppText
            txt="Filter by:"
            fontSize="16px"
            padding="20px 0px 10px 0px"
          />
          <div className="dropd flex bg-[#fff] text-[#8C8C8C] gap-20 w-[234px] rounded-md justify-start">
            <select
              name="map"
              id="mapHome"
              className="py-3 px-3 text-[#8c8c8c] bg-[#fff] ml-3"
              onChange={selectHandler}
            >
              <option value="Wildfires">Wildfires</option>
              <option value="Safehouses">Safehouses</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="max-w-[400px] max-h-[300px]">
            {/* <Image
              onImgClick={() => r.push("/evacuee")}
              src="/fire_map.png"
              width={500}
              height={500}
              borderRadius="10px"
              // setFiremap={setFiremap}
            /> */}
            <GetGoogleMap
              hostInfo={state}
              isClicked={isClicked}
              isBothClicked={isBothClicked}
            />
          </div>
        </MainContainer>
      </BackgroundContainer>

      <Navbar />
    </div>
  );
}
