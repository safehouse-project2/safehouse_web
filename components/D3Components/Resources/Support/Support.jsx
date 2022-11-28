import { MainContainer } from "../../../../styles/styledComps";
import UpperHalf from "../UpperHalf";
import Button from '../../Button/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import AppText from "../../AppText/AppText";
import Navbar from "../../Navbar/Navbar";

export default function Support() {
    const router = useRouter()
    return (
        <div className="overflow-x-auto bg-[#F0E6D9] h-[100vh]">
            <MainContainer>
                <div className="flex flex-col pb-20 px-4 faqGirlCont">
                    <div className="text-center">
                        <UpperHalf
                            title="Contact Us"
                            subtitle="Got Questions? Contact the SafeHouse Team!"
                            img="./support.png"
                        />
                    </div>
                    <a href="mailto:hello@safehouseapp.ca" >
                        <motion.div className="flex items-center gap-7 justify-center flex-row"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="flex">
                                <img src="./mail.png" alt="mailIcon" className="w-[70px]" />
                            </div>
                            <div className="flex flex-col gap-1 justify-start items-start">
                                <AppText txt="Email Us" fontSize="1.5rem" />
                                <AppText txt="Reach us at hello@safehouseapp.ca" fontSize="1rem" color="#8C8C8C" />
                            </div>
                        </motion.div>
                    </a>
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
        </div>
    );
}
