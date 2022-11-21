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
const AuthContext = React.createContext()
import { motion } from "framer-motion";

export default function host() {
  return (
    <AuthProvider>
      <BackgroundContainer src="./homeBG.png">
        {/* <NavBar /> */}
        <MainContainer>
          <LeftContainer>
            <HostName />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <AppText
                txt="Become a host and offer your place to the wildfire evacuees in BC."
                fontSize="18px"
                color="#f5f5f5"
                lineHeight="2.0"
                padding="0px 0px 30px 0px"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                txt="Take me to my Dashboard"
                href="/hosthome"
                endIcon={<ArrowForwardIcon />}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                txt="Post my place"
                href="/PostHome"
                margin="20px 0px 0px 0px"
                endIcon={<ArrowForwardIcon />}
              />
            </motion.div>

          </LeftContainer>
        </MainContainer>
      </BackgroundContainer>
    </AuthProvider>
  );
}
