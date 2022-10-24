import { BackgroundContainer, MainContainer, CenterContainer, LeftContainer } from "../styles/styledComps";
import AppText from "../components/D3Components/AppText/AppText";
import CreatHomePost from "../components/hostPosting/CreatHomePost";
import { Container } from '@mui/material'
import Script from "next/script";
import Dropdown from "../components/D3Components/Dropdown/Dropdown";

import React from 'react'

export default function PostHome() {
  return (
    <BackgroundContainer src="homeBG.png">
      <MainContainer>
        <LeftContainer>
          <div className="flex flex-col gap-4 pb-10">
            <AppText
              txt="Tell us something about your place."
              fontSize="34px"
              color="#f5f5f5"
            />
            {/* <AppText
              txt="What kind of place will you be hosting ?"
              fontSize="18px"
              color="#f5f5f5"
            /> */}
            {/* <Dropdown
              backgroundColor="#f5f5f5"
            /> */}
          </div>
          <Script
            strategy="beforeInteractive"
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places`}
          >
          </Script>
          <CreatHomePost />
        </LeftContainer>
      </MainContainer>
    </BackgroundContainer>
  )
}

