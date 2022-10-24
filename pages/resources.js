import Button from '../components/D3Components/Button/Button'
import { BackgroundContainer, MainContainer, CenterContainer } from '../styles/styledComps'
import AppText from '../components/D3Components/AppText/AppText'
import Header from '../components/D3Components/Header/Header'
import Navbar from '../components/D3Components/Navbar/Navbar'
import { useRouter } from 'next/router'

export default function resources (){
    return <div>
            <BackgroundContainer src="./BrownGraphicBG.svg">
            <CenterContainer>
            <div className='flex justify-center items-center flex-col'>
                <Header txt="Need Help?" hSize="75px"/>
                <AppText txt="Welcome to our help section" fontSize="25px"/>
            </div>
            <div className='flex justify-center items-center flex-col gap-3 mt-50'>
                <img src="./OnlineWomenTalking.png"/>
            </div>
            <div className='flex justify-center items-center flex-col gap-3 p-50'>
                <AppText fontSize="20px" txt="Here are some resources for further assitance"/>
                <Button txt="FireSmartBC.ca" target="_blank" href="https://firesmartbc.ca"/>
                <Button txt="Wildfire Preparedness Guide by The BC Goverment" target="_blank" href="https://www2.gov.bc.ca/assets/gov/public-safety-and-emergency-services/emergency-preparedness-response-recovery/embc/preparedbc/preparedbc-guides/wildfire_preparedness_guide.pdf"/>
                <Button txt="BC Goverment Wildfire Service" target="_blank" href="https://www2.gov.bc.ca/gov/content/safety/wildfire-status"/>
            </div>
                <Navbar/>
            </CenterContainer>
        </BackgroundContainer>
    </div>
}