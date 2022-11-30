import Image from "../Image/ImageComp";
import AppText from "../AppText/AppText";
import Button from "../Button/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Intro() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    })
    const r = useRouter();
    return (
        <div className="flex flex-col items-center justify-center">
            <motion.div
                // data-aos="fade-right"
                // data-aos-duration="1500"
                // data-aos-once="true"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <Image
                    src="/safehouseLogo.png"
                    width={237}
                    height={198}
                />
            </motion.div>
            <motion.div
                // data-aos="fade-right"
                // data-aos-duration="1000"
                // data-aos-once="true"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pb-3"
            >
                <AppText
                    txt='Where your safety is our priority.'
                    color='#F0E6D9'
                    fontWeight="bold"
                    fontSize='3rem'
                />
            </motion.div>
            <motion.div
                // data-aos="fade-right"
                // data-aos-delay="200"
                // data-aos-duration="1000"
                // data-aos-once="true"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <AppText
                    txt='Ready to evacuate a wildfire? 
                            We are here to help you find a safe place!'
                    color='#F5F5F5'
                    fontWeight="400"
                    fontSize='1.3rem'
                    padding="0px 0px 20px 0px"
                />
            </motion.div>
            <motion.div
                // data-aos="fade-right"
                // data-aos-delay="400"
                // data-aos-duration="1000"
                // data-aos-once="true"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Button
                    txt='Get Started'
                    endIcon={<ArrowForwardIcon />}
                    onBtnClick={() => r.push("/gettingstarted")}
                />
            </motion.div>
        </div>
    )
}