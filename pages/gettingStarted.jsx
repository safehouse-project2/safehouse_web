import Button from "../components/D3Components/Button/Button";
import HomeIcon from "@mui/icons-material/Home";
import LuggageIcon from "@mui/icons-material/Luggage";
import { BackgroundContainer, CenterContainer } from "../styles/styledComps";
import AppText from "../components/D3Components/AppText/AppText";
import { useState, useEffect, useRef } from "react";
import { auth } from "../firebase";
import Popup from "../components/Authentication/Popup";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  const r = useRouter();
  const inputAreaRef = useRef();
  const [popup, setPopup] = useState(false);

  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (user === null || user.displayName === null) {
        return;
      } else {
        setUserName(user.displayName);
      }
    });
    return unsubscribe;
  }, []);
  console.log(user)
  function togglePopup() {
    setPopup(!popup);
  }

  function handleHostUser() {
    console.log("host user");
    if (user) {
      return <Button
        txt="Host"
        endIcon={<HomeIcon />}
        href="/host"
        borderRadius="8px"
      />;
    } else {
      return <Button
        onBtnClick={togglePopup}
        txt="Host"
        endIcon={<HomeIcon />}
        borderRadius="8px"
      />;
    }
  }

  function handleEvacueUsesr() {
    console.log("evacuee user");
    if (user) {
      return <Button
        txt="Evacuee"
        endIcon={<LuggageIcon />}
        href="/userhome"
        borderRadius="8px"
      />;
    } else {
      return (
        <Button
          txt="Evacuee"
          endIcon={<LuggageIcon />}
          onBtnClick={togglePopup}
          borderRadius="8px"
        />
      );
    }
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (!inputAreaRef.current.contains(e.target)) {
        console.log("Outside ");
        setPopup(false);
      } else {
        console.log("Inside");
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  return (
    <div>
      <>


        <BackgroundContainer src="./homeBG.png">
          <CenterContainer>
            {userName && (
              <div className="py-5">
                <motion.p
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0 }}
                  className="text-3xl text-[#f5f5f5] text-center">Hello,<br /> <span className="text-[#B38A58] font-semibold text-4xl">{userName}</span> 👋</motion.p>
              </div>
            )}
            <div ref={inputAreaRef}>{popup && <Popup />}</div>
            {/* <motion.div
              animate={{
                opacity: [0, 1, 1, 1],
                scale: [0, 2, 3, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            > */}
            <motion.div className="flex flex-col bg-[#e7e7e7] px-5 py-6 rounded-xl dropShadow"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-col gap-3 text-center">
                <AppText
                  txt="Are you a Host or an Evacuee?"
                  fontSize="1.3rem"
                  color="#353535"
                  fontWeight="500"
                />

                {/* <HomeIcon style={{ fill: "#f5f5f5" }} sx={{ fontSize: 150 }} /> */}
                {/* <Button onClick={handleHostUser} txt="Host" /> */}
                {handleHostUser()}
                {/* <LuggageIcon
                  style={{ fill: "#f5f5f5" }}
                  sx={{ fontSize: 150 }}
                /> */}
                {handleEvacueUsesr()}
                {!userName && (
                  <>
                    <p
                      className="text-[#383838]">
                      Already have an account?{" "}
                      <button
                        className='text-[#4285F4] text-[1rem] hover:text-[#274f8f] transition-all'
                        onClick={() => r.push("/auth/login")}
                      >
                        Login
                      </button>
                      {" "}to continue.
                    </p>
                    <p
                      className="text-[#383838]">
                      Or,{" "}
                      <button
                        className='text-[#4285F4] text-[1rem] hover:text-[#274f8f] transition-all'
                        onClick={() => r.push("/auth/signup")}
                      >
                        Signup
                      </button>
                      {" "}here.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
            {/* </motion.div> */}
          </CenterContainer>
        </BackgroundContainer>
      </>
    </div >
  );
}
