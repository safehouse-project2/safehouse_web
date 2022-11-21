import AppText from "../AppText/AppText"
import Image from "../Image/ImageComp"
import Header from "../Header/Header"
import { motion } from "framer-motion"

export default function UpperHalf() {
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0 }}
                >
                    <Header color="#f5f5f5" txt="Need Help?" hSize="45px" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <AppText
                        color="#f5f5f5"
                        txt="Welcome to our help section!"
                        fontSize="20px"
                    />
                </motion.div>
            </div>

            <motion.div className="flex justify-center items-center flex-col m-[50px]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Image width="367" height="253" src="/OnlineWomenTalking.png" />
            </motion.div>
        </>
    )
}