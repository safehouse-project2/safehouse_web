import React, { useState } from "react";
import {
  BackgroundContainer,
  MainContainer,
  CenterContainer,
  LeftContainer,
} from "../styles/styledComps";
import AppText from "../components/D3Components/AppText/AppText";
import Button from "../components/D3Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { AuthProvider, useAuth } from "../AuthContext/AuthContext";
import AddUser from "../components/hostPosting/addUser";

export default function host() {
  const [user, setUser] = useState(null);
  const addUser = user => {
    setUser(user);
  };
  console.log(user);
  return (
    <AuthProvider>
      <BackgroundContainer src="./homeBG.png">
        {/* <NavBar /> */}
        <MainContainer>
          <LeftContainer>
            <AddUser addUser={addUser} />
            {/* <CenterContainer> */}
            <AppText
              txt="Hello, John!"
              fontSize="34px"
              color="#f5f5f5"
              fontWeight="bold"
              lineHeight="1.0"
              padding="0px 0px 30px 0px"
            />
            <AppText
              txt="Become a host and offer your place to the wildfire evacuees in BC."
              fontSize="18px"
              color="#f5f5f5"
              lineHeight="2.0"
              padding="0px 0px 30px 0px"
            />
            {/* <AppText 
          txt='Authentication is not done yet, of course, only logged in host
          can come to this page to make a post.'
          color='#f5f5f5'
          fontSize='16px'
        /> */}
            <form onSubmit={() => {}}>
              <Button
                txt="Post my place"
                href="/PostHome"
                onBtnClick={() => {
                  console.log("post my place clicked");
                }}
                endIcon={<ArrowForwardIcon />}
              />
            </form>
            {/* </CenterContainer> */}
          </LeftContainer>
        </MainContainer>
      </BackgroundContainer>
    </AuthProvider>
  );
}
