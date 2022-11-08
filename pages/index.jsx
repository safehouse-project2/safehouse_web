import Button from "../components/D3Components/Button/Button";
import HomeIcon from "@mui/icons-material/Home";
import LuggageIcon from "@mui/icons-material/Luggage";
import { BackgroundContainer, CenterContainer } from "../styles/styledComps";
import AppText from "../components/D3Components/AppText/AppText";
import LoginOrLogout from "../components/Authentication/LoginOrLogout";
import { AuthProvider, useAuth } from "../AuthContext/AuthContext";
import { useState, useEffect, useRef } from "react";
import { auth } from "../firebase";
import Popup from "../components/Authentication/Popup";

export default function Home() {
  const inputAreaRef = useRef();
  const [popup, setPopup] = useState(false);

  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);

  console.log(userName);
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

  function togglePopup() {
    setPopup(!popup);
  }

  function handleHostUser() {
    console.log("host user");
    if (user) {
      return <Button txt="Host" icon={<HomeIcon />} href="/host" />;
    } else {
      return <Button onBtnClick={togglePopup} txt="Host" icon={<HomeIcon />} />;
    }
  }

  function handleEvacueUsesr() {
    console.log("evacuee user");
    if (user) {
      return <Button txt="Evacuee" icon={<LuggageIcon />} href="/evacuee" />;
    } else {
      return (
        <Button txt="Evacuee" icon={<LuggageIcon />} onBtnClick={togglePopup} />
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
      <AuthProvider>
        <LoginOrLogout />
        <BackgroundContainer src="./homeBG.png">
          <CenterContainer>
            {userName && (
              <AppText
                fontSize="24px"
                color="#f5f5f5"
                txt={`Hello ${userName}`}
              />
            )}
            <div ref={inputAreaRef}>{popup && <Popup />}</div>
            <div className="flex gap-10 z-99">
              <div className="flex justify-center items-center flex-col gap-3">
                <HomeIcon style={{ fill: "#f5f5f5" }} sx={{ fontSize: 150 }} />
                {/* <Button onClick={handleHostUser} txt="Host" /> */}
                {handleHostUser()}
                <AppText
                  txt="Apply to become a host"
                  color="#f5f5f5"
                  fontSize="16px"
                />
              </div>
              <div className="flex justify-center items-center flex-col gap-3">
                <LuggageIcon
                  style={{ fill: "#f5f5f5" }}
                  sx={{ fontSize: 150 }}
                />
                {handleEvacueUsesr()}
                <AppText
                  txt="Apply to become a host"
                  color="#f5f5f5"
                  fontSize="16px"
                />
              </div>
            </div>
          </CenterContainer>
        </BackgroundContainer>
      </AuthProvider>
    </div>
  );
}
