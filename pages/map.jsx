import GetGoogleMap from "../components/locations/GetGoogleMap";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledGoogleMap = styled(GetGoogleMap)`
    height: 100vh !important;
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
    return (
        <div className="flex w-[90vw] m-auto">
            {/* <Image
              onImgClick={() => r.push("/evacuee")}
              src="/fire_map.png"
              width={500}
              height={500}
              borderRadius="10px"
              // setFiremap={setFiremap}
            /> */}
            <StyledGoogleMap
                hostInfo={state}
                isClicked={isClicked}
                isBothClicked={isBothClicked}
            />
        </div>
    )
}