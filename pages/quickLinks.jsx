import UpperHalf from "../components/D3Components/Resources/UpperHalf"
import { MainContainer } from "../styles/styledComps"
import { motion } from 'framer-motion'
import Button from '../components/D3Components/Button/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'
import QuickLinks from "../components/D3Components/Resources/quicklinks";
import Navbar from "../components/D3Components/Navbar/Navbar";

export default function quickLinks() {
    const router = useRouter()
    return (
        <div className="overflow-x-auto bg-[#F0E6D9] h-[100vh] pb-10">
            <MainContainer>
                <div className="m-auto">
                    <UpperHalf
                        title="Quick Links"
                        subtitle="Quick links to our resources"
                        img="./resources3D.png"
                    />
                    <motion.div className="flex justify-center items-center"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <QuickLinks />
                    </motion.div>
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
    )
}
