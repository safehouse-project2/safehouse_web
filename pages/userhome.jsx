import AppText from "../components/D3Components/AppText/AppText";
import Input from "../components/D3Components/Input/Input";
import Slider from "../components/D3Components/Slider/Slider";
import { BackgroundContainer, MainContainer } from '../styles/styledComps';
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from "../components/D3Components/Navbar/Navbar";
import Image from "../components/D3Components/Image/ImageComp";

export default function UserHome() {
    return (
        <div>
            <BackgroundContainer src="">
                <MainContainer>
                    <Input
                        label="Search here"
                        variant="outlined"
                        icon={<SearchIcon />}
                        backgroundColor="#fefefe"
                    />
                    <div className="flex flex-col gap-2 pt-10">
                        <AppText
                            txt='Recent Listings'
                            fontSize='18px'
                            fontWeight="500"
                            padding='0px 0px 15px 0px'
                        />
                        <div className="flex flex-row gap-7 w-full h-full">
                            <Slider
                                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                                title="Burnaby, BC"
                                distance="5km"
                            />
                        </div>

                        <AppText
                            txt='1 Bedroom available'
                            fontSize="18px"
                            padding="10px 0px 0px 0px"
                        />
                    </div>

                    <AppText
                        txt='Latest data on wildfires and safehouses'
                        fontSize="18px"
                        padding="50px 0px 0px 0px"
                        fontWeight="500"
                    />
                    <AppText
                        txt='Filter by:'
                        fontSize="16px"
                        padding="20px 0px 10px 0px"
                    />
                    <div className="dropd flex bg-[#fff] py-3 text-[#8C8C8C] gap-20 w-[234px] px-3 rounded-md">
                        <AppText
                            txt="Please Select"
                            fontSize="16px"
                            fontWeight="300"
                            color="#8C8C8C"
                        />
                        <KeyboardArrowDownIcon />
                    </div>
                    {/* <Dropdown
                /> */}
                    <div className="w-[310px] h-[310px] pt-6">
                        <Image
                            src="/map1.png"
                            width={500}
                            height={500}
                            borderRadius="10px"
                        />
                    </div>
                </MainContainer>
            </BackgroundContainer>
            <Navbar />
        </div>
    )
}