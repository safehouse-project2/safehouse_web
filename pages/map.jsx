import GetGoogleMap from "../components/locations/GetGoogleMap";
import { useState } from "react";
import styled from "styled-components";

const GradDiv = styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 33.98%,
        rgba(0, 0, 0, 0.85) 100%
    );
    width: 100vw;
    height: 65vh;
    z-index: 999;
    position: absolute;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    pointer-events: none;
`

export default function Map() {
    const [isClicked, setIsClicked] = useState(false);
    const [isBothClicked, setIsBothClicked] = useState(false);
    const [state, setState] = useState([
        {
            homeType: "",
            description: "",

            addressLine1: "",
            addressLine2: "",
            city: "",
            province: "",
            postalCode: "",

            guests: 0,
            bedrooms: 0,
            beds: 0,
            bathrooms: 0,
            kitchen: 0,
            parking: 0,

            washer: "yes",
            dryer: "yes",
            petsAllowed: "yes",
            smokingAllowed: "yes",

            wifi: "yes",
            tv: "yes",
            airConditioning: "yes",
            heating: "yes",

            image: "",
        },
    ]);
    const selectHandler = e => {
        switch (e.target.value) {
            case "Wildfires":
                setIsBothClicked(false);
                return setIsClicked(false);
            case "Safehouses":
                setIsBothClicked(false);
                return setIsClicked(true);
            case "Both":
                return setIsBothClicked(true);
            default:
                return "Both";
        }
    };
    return (
        <div className="flex w-[100vw] m-auto]">
            <GradDiv>
                <p className="absolute z-[999] text-[#f5f5f5] text-xl px-5 ">
                    Click on any icon below to see details
                </p>
            </GradDiv>
            <GetGoogleMap
                hostInfo={state}
                isClicked={isClicked}
                isBothClicked={isBothClicked}
            />
        </div>
    )
}