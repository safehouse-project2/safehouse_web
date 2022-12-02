import AppText from "../components/D3Components/AppText/AppText";
import Input from "../components/D3Components/Input/Input";
import Slider from "../components/D3Components/Slider/Slider";
import { BackgroundContainer, MainContainer } from "../styles/styledComps";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/D3Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "/firebase";
import GetGoogleMap from "../components/locations/GetGoogleMap";
import { AuthProvider } from "../AuthContext/AuthContext";
import { motion } from "framer-motion";
import { useAuth } from "../AuthContext/AuthContext";

export default function UserHome({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isBothClicked, setIsBothClicked] = useState(false);
  const [state, setState] = useState([]);

  const currentUser = useAuth();

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
      case "All":
        return setIsBothClicked(true);
      default:
        return "Safehouses";
    }
  };
  const getSafeHouses = () => {
    setIsBothClicked(false);
    return setIsClicked(true);
  };

  return (
    <AuthProvider>
      <div className="overflow-x-hidden">
        <BackgroundContainer src="">
          <MainContainer margin="0px 0px 30px 0px">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="flex flex-col items-center justify-center"
            >
              <AppText
                txt="Welcome to Safehouse!"
                fontSize="25px"
                fontWeight="semibold"
              />
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="px-5"
            >
              <Input
                label="Search here"
                variant="outlined"
                icon={<SearchIcon />}
                backgroundColor="#fefefe"
                width="100%"
              />
            </motion.div> */}
            {/* <SliderFull /> */}
            <div className="flex flex-col gap-2 pt-10">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pl-5"
              >
                <AppText
                  txt="Recent Listings"
                  fontSize="23px"
                  fontWeight="500"
                />
              </motion.div>

              <motion.div
                className="flex flex-row gap-7"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Slider state={state} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-5"
            >
              <AppText
                txt="Latest data on wildfires and safe houses"
                fontSize="20px"
                padding="50px 0px 0px 0px"
                fontWeight="500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="px-5"
            >
              <AppText
                txt="Filter by:"
                fontSize="18px"
                padding="20px 0px 10px 0px"
              />
            </motion.div>
            <motion.div
              className="flex flex-start px-5"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <select
                name="map"
                id="mapHome"
                className="py-3 px-3 text-[#272727] bg-[#f5f5f5] rounded-md w-[250px]"
                onChange={selectHandler}
              >
                <option value="Safehouses">Safehouses</option>
                <option value="Wildfires">Wildfires</option>
                <option value="All">All</option>
              </select>
            </motion.div>
            <motion.div
              className="flex w-[80vw] px-5 mapContainerUserhome pb-10 googleMapCont"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
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
                getSafeHouses={getSafeHouses}
                btnState={true}
                width="97vw"
                height="50vh"
              />
            </motion.div>
          </MainContainer>
        </BackgroundContainer>

        <Navbar />
      </div>
    </AuthProvider>
  );
}
