import { MainContainer } from "../../../../styles/styledComps";
import UpperHalf from "../UpperHalf";
import Button from '../../Button/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import AppText from "../../AppText/AppText";
import Navbar from "../../Navbar/Navbar";
import InfoCard from "../InfoCard";

export default function Donate() {
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
                            <a href="https://uwbc.ca/campaign/wildfires/" target="_blank">
                            <InfoCard 
                            txt1="BC Wildfire Recovery Fund"
                            txt2="uwbc.ca"
                            />
                            </a>

                            <a href="https://cofoodbank.com/" target="_blank">
                            <InfoCard 
                            txt1="Central Okanagan Food Bank"
                            txt2="Volunteer or donate food"
                            />
                            </a>
                            
                            </div>
                        </motion.div>
                    {/* <AccordionComp /> */}
                    <motion.div className="flex justify-center items-center pt-6"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button
                            txt="Back"
                            onBtnClick={() => router.back()}
                            startIcon={<ArrowBackIcon />}
                        />
                    </motion.div>
                </div>
            </MainContainer>
            <Navbar />
        </div>
    );
}