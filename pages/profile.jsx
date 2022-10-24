import NavBar from '../components/Home/NavBar'
import { BackgroundContainer, CenterContainer } from '../styles/styledComps'
import Button from "../components/D3Components/Button/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from '../components/D3Components/Image/ImageComp.jsx'
import Intro from '../components/D3Components/Profile/intro';
import Info from '../components/D3Components/Profile/info';
import Iconbtn from '../components/D3Components/Profile/iconbtn';
import AppText from '../components/D3Components/AppText/AppText';

export default function Listings() {


  return (
    <div>
      <div className='absolute w-full h-auto'>
        <NavBar />
      </div>
      <BackgroundContainer src="./homeBG.png">

        <div className="ml-5">
          <Intro />
        
          <div className="flex mt-7 mb-5 justify-center">
            <Image 
                src="/person.jpg"
                width="150"
                height="150"
                borderRadius="50%"
                />
         </div>

         <div className="flex mb-5 justify-center">
            <AppText 
            txt='John Doe'
            color='#F5F5F5'
            fontSize='30px'
            fontWeight='500'/>
          </div>

            <Info />

          <div className="mt-10">
            <Iconbtn />
          </div>

        <CenterContainer>

        <div className="m-10">
          <Button
                txt="Contact Host"
                fontSize="16px"
                endIcon={<ArrowForwardIcon />}
                onBtnClick="/"
            />
        </div>
        
        </CenterContainer>
        </div>
        </BackgroundContainer>
    </div>
  )
}