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
import { AuthProvider } from "../AuthContext/AuthContext";
import HostName from "../components/hostPosting/HostName";

export default function host() {
  return (
    <AuthProvider>
      <BackgroundContainer src="./homeBG.png">
        {/* <NavBar /> */}
        <MainContainer>
          <LeftContainer>
            {/* <CenterContainer> */}
            <HostName />
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
            <Button
              txt="Post my place"
              href="/PostHome"
              endIcon={<ArrowForwardIcon />}
            />
            {/* </CenterContainer> */}
          </LeftContainer>
        </MainContainer>
      </BackgroundContainer>
    </AuthProvider>
  );
}
