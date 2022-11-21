import AppText from "../AppText/AppText"
import InfoCard from "./InfoCard"
import { useEffect, useRef } from "react";
import { motion } from "framer-motion"

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
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <AppText
                        fontSize="20px"
                        txt="Here are some resources for further assistance:"
                    />
                </motion.div>

                <motion.div ref={card1Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <InfoCard
                        txt1="FireSmartBC.ca"
                        txt2="Fire safety preparedness"
                    />
                </motion.div>

                <motion.div ref={card2Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <InfoCard
                        txt1="Wildfire Preparedness Guide"
                        txt2="by The BC Goverment"
                    />
                </motion.div>

                <motion.div ref={card3Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <InfoCard
                        txt1="BC Goverment Wildfire Service"
                        txt2="Wildfire and evacuation statuses with news and updates"
                    />
                </motion.div>
            </div>
        </>
    )
}