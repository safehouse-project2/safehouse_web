import { MainContainer } from "../../../../styles/styledComps";
import UpperHalf from "../UpperHalf";
import AccordionComp from "../../Accordion/AccordionForQ&A";
import Button from '../../Button/Button';
import Navbar from "../../Navbar/Navbar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function FAQ() {
    const router = useRouter()
    return (
        <div className="overflow-x-auto bg-[#F0E6D9] h-[100vh]">
            <MainContainer>
                <div className="flex flex-col pb-20 px-4 faqGirlCont">
                    <UpperHalf
                        title="FAQs"
                        subtitle="Frequently Asked Questions"
                        img="./faqGirl.png"
                    />
                    <AccordionComp />
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
