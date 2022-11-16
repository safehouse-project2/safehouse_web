import Image from "../components/D3Components/Image/ImageComp"
import { BackgroundContainer } from '../styles/styledComps'
import AppText from "../components/D3Components/AppText/AppText"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

export default function Splash() {
    const r = useRouter()
    setTimeout(() => {
        r.push("/welcome")
    }, 3000)
    return (
        <>
            <BackgroundContainer src='./bg_overlay.png' className="">
                <motion.div
                    className="flex justify-center items-center flex-col"
                    animate={{
                        opacity: [0, 0.5, 1],
                        y: [-100, 0],
                        duration: 3
                    }}
                >
                    <Image
                        src="/safehouseLogo.png"
                        width={237 + 53}
                        height={198 + 53}
                    />
                    <AppText
                        txt='Where your safety is our priority.'
                        color='#F0E6D9'
                        fontWeight="500"
                        fontSize='1.3rem'
                    />
                </motion.div>
            </BackgroundContainer>
        </>
    )
}