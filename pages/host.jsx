import React from "react";
import {
  BackgroundContainer,
  MainContainer,
  CenterContainer,
  LeftContainer,
} from "../styles/styledComps";
import AppText from "../components/D3Components/AppText/AppText";
import Button from "../components/D3Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function host() {
  return (
    <BackgroundContainer src="./homeBG.png">
      {/* <NavBar /> */}
      <MainContainer>
        <LeftContainer>
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
          <Button
            txt="Post my place"
            href="/PostHome"
            endIcon={<ArrowForwardIcon />}
          />
          {/* </CenterContainer> */}
        </LeftContainer>
      </MainContainer>
    </BackgroundContainer>
  );
}
