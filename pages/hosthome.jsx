import AppText from "../components/D3Components/AppText/AppText";
import Input from "../components/D3Components/Input/Input";
import Slider from "../components/D3Components/Slider/Slider";
import { BackgroundContainer, MainContainer, CenterContainer } from '../styles/styledComps';
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from "../components/D3Components/Navbar/Navbar";
import Image from "../components/D3Components/Image/ImageComp";

export default function HostHome() {
    return (
        <div>

            <BackgroundContainer>
                <MainContainer>
                    <CenterContainer>
                        <AppText
                            txt="Hello, John 👋"
                            fontSize="34px"
                        />
                    </CenterContainer>
                </MainContainer>
            </BackgroundContainer>
            <Navbar />
        </div>
    )
}