import Image from "../components/D3Components/Image/ImageComp"
import { BackgroundContainer } from '../styles/styledComps'
import AppText from "../components/D3Components/AppText/AppText"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Splash() {
    const [isVisible, setIsVisible] = useState(false)
    const r = useRouter()
    setTimeout(() => {
        r.push("/welcome")
    }, 3000)
    return (
        <>
            <BackgroundContainer src='./bg_overlay.png' className="">
                <AnimatePresence>
                    <motion.div
                        key="logo"
                        className="flex justify-center items-center flex-col"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
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
                </AnimatePresence>
            </BackgroundContainer>
        </>
    )
}