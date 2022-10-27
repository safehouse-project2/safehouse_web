import AppText from "../components/D3Components/AppText/AppText";
import Input from "../components/D3Components/Input/Input";
import Slider from "../components/D3Components/Slider/Slider";
import { BackgroundContainer, MainContainer } from '../styles/styledComps';
import SearchIcon from "@mui/icons-material/Search";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Navbar from "../components/D3Components/Navbar/Navbar";
import Image from "../components/D3Components/Image/ImageComp";
import { useState } from "react";
import { useRouter } from "next/router";
// import SliderFull from "../components/D3Components/Slider/SliderFull";

export default function UserHome() {
    const r = useRouter();
    const [firemap, setFiremap] = useState(false);
    const [housemap, setHousemap] = useState(false);
    const [both, setBoth] = useState(false);

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
                    {/* <SliderFull /> */}
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
                                onSliderClick={() => r.push("/listingsnew")}
                            />
                        </div>

                        {/* <AppText
                            txt='1 Bedroom available'
                            fontSize="18px"
                            padding="10px 0px 0px 0px"
                        /> */}
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
                    <div className="dropd flex bg-[#fff] text-[#8C8C8C] gap-20 w-[234px] rounded-md justify-start">
                        <select name="map" id="mapHome" className="py-3 px-3 text-[#8c8c8c] bg-[#fff] ml-3">
                            <option value="Wildfires">Wildfires</option>
                            <option value="Safehouses">Safehouses</option>
                            <option value="Both">Both</option>
                        </select>
                    </div>
                    <div className="w-[310px] h-[310px] pt-6">
                        <Image
                            onImgClick={() => r.push('/evacuee')}
                            src="/fire_map.png"
                            width={500}
                            height={500}
                            borderRadius="10px"
                        // setFiremap={setFiremap}
                        />
                    </div>
                </MainContainer>
            </BackgroundContainer>

            <Navbar />
        </div>
    )
}