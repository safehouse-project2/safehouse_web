import Image from "../Image/ImageComp";
import AppText from "../AppText/AppText";
import Button from "../Button/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Intro() {
    const r = useRouter();
    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <Image
                    src="/safehouseLogo.png"
                    width={237}
                    height={198}
                />
            </div>
            <AppText
                txt='Where your safety is our priority.'
                color='#F0E6D9'
                fontWeight="bold"
                fontSize='3rem'
            />
            <AppText
                txt='Ready to evacuate a wildfire? 
                            We are here to help you find a safe place!'
                color='#F5F5F5'
                fontWeight="400"
                fontSize='1.3rem'
                padding="0px 0px 20px 0px"
            />
            <Button
                txt='Get Started'
                endIcon={<ArrowForwardIcon />}
                onBtnClick={() => r.push("/gettingStarted")}
            />
        </div>
    )
}