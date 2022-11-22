import NavBar from "../components/Home/NavBar";
import { CenterContainer } from "../styles/styledComps";
import Image from "../components/D3Components/Image/ImageComp.jsx";
import Button from "../components/D3Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Ammenities from "../components/D3Components/Listings/ammenities";
import Info from "../components/D3Components/Listings/info";
import Description from "../components/D3Components/Listings/description";
import Rules from "../components/D3Components/Listings/rules";
import Navbar from "../components/D3Components/Navbar/Navbar";

export default function Listings() {
  return (
    <div>
      <Image src="/home.jpg" width="2000px" height="1300px" altText="No Images uploaded by the host" />
      <div className="flex flex-col items-left justify-left ml-5">
        <Info />
        {/* test */}
        <Description />
        <Ammenities />
        <Rules />
      </div>

      <CenterContainer>
        <div className="m-10">
          <Button
            txt="Contact Host"
            fontSize="16px"
            endIcon={<ArrowForwardIcon />}
            onBtnClick="/"
          />
        </div>
      </CenterContainer>
      <Navbar
        value="/userhome"
      />
    </div>
  );
}
