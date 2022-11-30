import { MainContainer } from "../../../../styles/styledComps";
import UpperHalf from "../UpperHalf";
import Button from '../../Button/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import AppText from "../../AppText/AppText";
import Navbar from "../../Navbar/Navbar";
import InfoCard from "../InfoCard";
import { useRef, useEffect } from "react";

export default function Donate() {
    const Link1 = useRef(null)
    const Link2 = useRef(null)

    useEffect(() => {
        const Link1Cont = Link1.current
        const Link2Cont = Link2.current

        Link1Cont.addEventListener('click', () => {
            window.open('https://uwbc.ca/campaign/wildfires/', '_blank')
        })
        Link2Cont.addEventListener('click', () => {
            window.open('https://cofoodbank.com/', '_blank')
        })
    })


    const router = useRouter()
    return (
        <div className="overflow-x-auto bg-[#F0E6D9] h-[100vh] ">
            <MainContainer>
                <div className="flex flex-col pb-20 px-4 faqGirlCont">
                    <div className="text-center">
                        <UpperHalf
                            title="Donate"
                            subtitle="Can't offer a space? There are more ways to help!"
                            img="./support.png"
                        />
                    </div>
                    <motion.div className="flex items-center gap-7 justify-center flex-row"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="flex justify-center items-center flex-col gap-5 text-center cardsContainer">
                            <div ref={Link1}>
                                <InfoCard
                                    txt1="BC Wildfire Recovery Fund"
                                    txt2="uwbc.ca"
                                />
                            </div>

                            <div ref={Link2}>
                                <InfoCard
                                    txt1="Central Okanagan Food Bank"
                                    txt2="Volunteer or donate food"
                                />
                            </div>


                        </div>
                    </motion.div>
                    {/* <AccordionComp /> */}
                    <motion.div className="flex justify-center items-center pt-6"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button 
                            fontSize="22px"
                            txt="Back"
                            onBtnClick={() => router.back()}
                            startIcon={<ArrowBackIcon />}
                        />
                    </motion.div>
                    <Navbar/>
                </div>
            </MainContainer>
        </div>
    );
}