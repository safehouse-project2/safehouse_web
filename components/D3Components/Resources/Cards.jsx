import AppText from "../AppText/AppText"
import InfoCard from "./InfoCard"
import { useEffect, useRef } from "react";

export default function Cards() {
    // routes
    const card1Route = () => {
        window.open('https://firesmartbc.ca', '_blank');
    }

    const card2Route = () => {
        window.open('https://www2.gov.bc.ca/assets/gov/public-safety-and-emergency-services/emergency-preparedness-response-recovery/embc/preparedbc/preparedbc-guides/wildfire_preparedness_guide.pdf', '_blank');
    }

    const card3Route = () => {
        window.open('https://www2.gov.bc.ca/gov/content/safety/wildfire-status', '_blank');
    }


    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useEffect(() => {
        const card1Element = card1Ref.current;
        const card2Element = card2Ref.current;
        const card3Element = card3Ref.current;

        card1Element.addEventListener('click', card1Route);
        card2Element.addEventListener('click', card2Route);
        card3Element.addEventListener('click', card3Route);
    })
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-5 text-center cardsContainer">
                <AppText
                    fontSize="20px"
                    txt="Here are some resources for further assistance:"
                />

                <div ref={card1Ref}>
                    <InfoCard
                        txt1="FireSmartBC.ca"
                        txt2="Fire safety preparedness"
                    />
                </div>

                <div ref={card2Ref}>
                    <InfoCard
                        txt1="Wildfire Preparedness Guide"
                        txt2="by The BC Goverment"
                    />
                </div>

                <div ref={card3Ref}>
                    <InfoCard
                        txt1="BC Goverment Wildfire Service"
                        txt2="Wildfire and evacuation statuses with news and updates"
                    />
                </div>
            </div>
        </>
    )
}