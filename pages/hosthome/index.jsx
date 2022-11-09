import AppText from "../../components/D3Components/AppText/AppText";
import {
  BackgroundContainer,
  MainContainer,
  CenterContainer,
  LeftContainer,
} from "../../styles/styledComps";
import Navbar from "../../components/D3Components/Navbar/Navbar";
import ReservationBox from "../../components/D3Components/ReservationBox/ReservationBox";
import ReviewBox from "../../components/D3Components/ReviewBox/ReviewBox";

export default function HostHome() {
  return (
    <div className="flex flex-col justify-center items-center">
      <MainContainer>
        <LeftContainer>
          <div className="flex flex-col gap-3">
            <AppText txt="Hello, John 👋" fontSize="34px" />
            <AppText
              txt="What do you want to do ?"
              fontSize="16px"
              color="#8c8c8c"
            />
          </div>

          <div className="flex flex-col pt-10 justify-start items-start gap-3">
            <AppText txt="Your reservations" fontSize="20px" />
            <ReservationBox />
            <ReservationBox />
          </div>

          <div className="flex flex-col pt-10 justify-start items-start gap-3">
            <AppText txt="Your reviews 🌟" fontSize="20px" />
            <div className="flex flex-col gap-5">
              <ReviewBox />
              <ReviewBox />
              <ReviewBox />
            </div>
          </div>
        </LeftContainer>
      </MainContainer>
      <Navbar />
    </div>
  );
}
