import AppText from "../AppText/AppText";
import Image from "../Image/ImageComp";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Mockups() {
    // const outRef = useRef(null);
    // useEffect(() => {
    //     const out = outRef.current;

    //     out.addEventListener('aos:out', ({ detail }) => {
    //         console.log('animated-out', detail)
    //     })
    // })
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 userhomeMock">
                <motion.div
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
                    // data-aos-once="true"
                    // data-aos-delay="200"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/userhome.png"
                        width={284}
                        height={570}
                    />
                </motion.div>
                <motion.div className="flex justify-center items-center bg-[#1e688d] min-w-10 min-h-10 px-5 py-7 rounded-lg"
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
                    // data-aos-once="true"
                    // data-aos-delay="400"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <AppText
                        txt="Check the latest listings and chat with your host"
                        color="#f5f5f5"
                        fontSize="1.1rem"
                    />
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 mapMock">
                <motion.div className="flex justify-center items-center bg-[#1e688d] min-w-10 min-h-10 px-5 py-7 rounded-lg"
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
                    // data-aos-once="true"
                    // data-aos-delay="400"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <AppText
                        txt="Find the nearest Safe House 
                                in our Wildfire Map"
                        color="#f5f5f5"
                        fontSize="1.1rem"
                    />
                </motion.div>
                <motion.div className=""
                    // data-aos="fade-left"
                    // data-aos-duration="1000"
                    // data-aos-once="true"
                    // data-aos-delay="200"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="/mapMock.png"
                        width={284}
                        height={570}
                    />
                </motion.div>
            </div>
        </>
    )
}