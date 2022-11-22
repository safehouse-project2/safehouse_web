/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */

import Navbar from "../components/D3Components/Navbar/Navbar";
import { CenterContainer } from "../styles/styledComps";
import Image from "../components/D3Components/Image/ImageComp.jsx";
import Button from "../components/D3Components/Button/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Ammenities from "../components/D3Components/NewListings/Ammenities";
import Info from "../components/D3Components/NewListings/Info";
import Description from "../components/D3Components/NewListings/Description";
import Rules from "../components/D3Components/NewListings/Rules";
import { useRouter } from "next/router";

export default function Listings() {
    const r = useRouter();
    return (
        <div>
            <Image src="/home_room.jpg" width="2000px" height="1300px" />
            <div className="flex flex-col items-left justify-left ml-5 pt-10">
                <Info />
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
                        onBtnClick={() => r.push("/chat")}
                    />
                </div>
            </CenterContainer>
            <Navbar
                value="/listingsnew"
            />
        </div>
    );
}

/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
/* DON'T MESS UP WITH THIS PAGE PLEASE */
