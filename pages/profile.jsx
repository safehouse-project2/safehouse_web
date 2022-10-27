import { BackgroundContainer, CenterContainer } from "../styles/styledComps";
import Button from "../components/D3Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Intro from "../components/D3Components/Profile/intro";
import Info from "../components/D3Components/Profile/info";
import Iconbtn from "../components/D3Components/Profile/iconbtn";
import User from "../components/D3Components/Profile/user";
import Navbar from "../components/D3Components/Navbar/Navbar";
import AppText from "../components/D3Components/AppText/AppText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";

export default function Listings() {
  const r = useRouter();
  return (
    <div className="pb-10">
      <Navbar />
      <BackgroundContainer src="./homeBG.png">
        <div className="flex flex-col p-4">
          <Intro />
          <User />
          <Info />
          <div className="flex p-7"><Iconbtn /></div>

          <CenterContainer>
            <div className="flex pt-10 pb-20">
              <Button
                txt="Contact Host"
                fontSize="16px"
                endIcon={<ArrowForwardIcon />}
                onBtnClick={() => alert("Contacting Host")}
              />
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { r.push('/list') }}>
              <AppText
                color="#F5F5F5"
                txt=" See All reservations"
                fontSize="20px"
              />
              <KeyboardArrowRightIcon
                fontSize="large"
                style={{ fill: "#f5f5f5" }}
              />
            </div>
          </CenterContainer>
        </div>


      </BackgroundContainer>
    </div>
  );
}
