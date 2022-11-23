import AppText from "../AppText/AppText"
import QuickLinks from "./quicklinks";
import InfoCard from "./InfoCard"
import { useEffect, useRef,} from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ModeStandbyOutlined } from "@mui/icons-material";

export default function Cards() {
    // routes
    const card1Route = () => {
        window.open('/faq',);
    }

    const card2Route = () => {
        setLinks(true);
        // setCards(false);
    }

    const card3Route = () => {
        setSupport(true);
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

    const [links, setLinks] = useState(false);
    const [support, setSupport] = useState(false);
    // const [cards, setCards] = useState(true);

    useState()
    // useState()

    return (
        <>
            <div className="flex justify-center items-center flex-col gap-5 text-center cardsContainer">
            {/* {cards ? <> */}
                {/* resource "menu" */}
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
                        txt1="FAQ"
                        txt2="Frequently Asked Questions"
                    />
                </motion.div>

                <motion.div ref={card2Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <InfoCard
                        txt1="Resources"
                        txt2="Quick links to any additional information you need"
                    />
                </motion.div>

                <motion.div ref={card3Ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <InfoCard
                        txt1="Support"
                        txt2="Contect the SafeHouse Team"
                    />
                </motion.div>
                {/* </> : null}; */}


                {links ? 
                    <motion.div ref={card2Ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                    <QuickLinks/>
                </motion.div> : null}

                {support ?
                    <motion.div ref={card2Ref}
                     initial={{ opacity: 0, y: 100 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.5 }}
                    > 
                        <AppText 
                        fontSize="20px"
                        fontWeight="bold"
                        color="#20514B" 
                        txt="Email: hello@safehouseapp.ca"/> 
                    </motion.div>
                : null}

            </div>
        </>
    )
}