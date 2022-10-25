import AppText from "../components/D3Components/AppText/AppText";
import Input from "../components/D3Components/Input/Input";
import Slider from "../components/D3Components/Slider/Slider";
import { BackgroundContainer, MainContainer, CenterContainer, LeftContainer } from '../styles/styledComps';
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from "../components/D3Components/Navbar/Navbar";
import Image from "../components/D3Components/Image/ImageComp";
import ReservationBox from "../components/D3Components/ReservationBox/ReservationBox";

export default function HostHome() {
    return (
        <div className="flex flex-col justify-center items-center">
            <MainContainer>
                <LeftContainer>
                    <div className="flex flex-col gap-3">
                        <AppText
                            txt="Hello, John 👋"
                            fontSize="34px"
                        />
                        <AppText
                            txt="What do you want to do ?"
                            fontSize="16px"
                            color="#8c8c8c"
                        />
                    </div>

                    <div className="flex flex-col pt-10 justify-start items-start gap-3">
                        <AppText
                            txt="Your reservations"
                            fontSize="20px"
                        />
                        <ReservationBox />
                    </div>
                </LeftContainer>
            </MainContainer>
            <Navbar />
        </div>
    )
}