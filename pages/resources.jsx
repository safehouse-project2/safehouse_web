import Button from '../components/D3Components/Button/Button'
import { BackgroundContainer, MainContainer, CenterContainer } from '../styles/styledComps'
import AppText from '../components/D3Components/AppText/AppText'
import Header from '../components/D3Components/Header/Header'
import Navbar from '../components/D3Components/Navbar/Navbar'
import InfoCard from '../components/D3Components/InfoCard/InfoCard'
import Image from '../components/D3Components/Image/ImageComp'
import { useRouter } from 'next/router'

//have links open in a new tab

export default function resources() {
    const r = useRouter()
    return (
        <BackgroundContainer src="blobBG.svg">
            {/* <div className='w-[100%] z-999 mt-[-20px]'>
                <img className='z-[-999] fixed w-[100%]' src="/BrownGraphicBG.svg" />
            </div> */}
            <MainContainer>
                <div className='flex flex-col pb-20 px-4'>
                    <div className='flex justify-center items-center flex-col'>
                        <Header
                            color="#f5f5f5"
                            txt="Need Help?"
                            hSize="45px"
                        />
                        <AppText
                            color="#f5f5f5"
                            txt="Welcome to our help section!"
                            fontSize="20px"
                        />
                    </div>

                    <div className='flex justify-center items-center flex-col m-[50px]'>
                        <Image
                            width="367"
                            height="253"
                            src="/OnlineWomenTalking.png"
                        />
                    </div>

                    <div className='flex justify-center items-center flex-col gap-5 text-center'>
                        <AppText
                            fontSize="20px"
                            txt="Here are some resources for further assistance:"
                        />
                        <InfoCard
                            onCrdClick={() => r.push("https://firesmartbc.ca")}
                            txt1="FireSmartBC.ca"
                            txt2="Fire safetey preparedness"
                            target="_blank"
                        />
                        <InfoCard
                            onCrdClick={() => r.push("https://www2.gov.bc.ca/assets/gov/public-safety-and-emergency-services/emergency-preparedness-response-recovery/embc/preparedbc/preparedbc-guides/wildfire_preparedness_guide.pdf")}
                            txt1="Wildfire Preparedness Guide"
                            txt2="by The BC Goverment"
                            target="_blank"
                        />
                        <InfoCard
                            onCrdClick={() => r.push("https://www2.gov.bc.ca/gov/content/safety/wildfire-status")}
                            txt1="BC Goverment Wildfire Service"
                            txt2="Wildfire and evacuation statuses with news and updates"
                            target="_blank"
                        />
                    </div>

                    <Navbar />
                </div>
            </MainContainer>
        </BackgroundContainer>
    )
}