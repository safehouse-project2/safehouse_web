import Navbar from '../components/D3Components/Navbar/Navbar';
import { CenterContainer, LeftContainer } from '../styles/styledComps'
import Image from '../components/D3Components/Image/ImageComp.jsx'
import Button from "../components/D3Components/Button/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Ammenities from '../components/D3Components/Listings/ammenities';
import Info from '../components/D3Components/Listings/info';
import Description from '../components/D3Components/Listings/description';
import Rules from '../components/D3Components/Listings/rules';
import { useRouter } from 'next/router'

export default function Listings() {
    const r = useRouter()

  return (
    <div className='flex flex-col'>
      <Image
        src="/home.jpg"
        width="2000px"
        height="1300px"
      />
      <div className="flex flex-col items-left justify-left px-4 pt-4">
        <Info />
        <Description />
        <Ammenities />
        <Rules />
      </div>
      <CenterContainer>
        <div className="flex pt-10 pb-20">
          <Button
            txt="Contact Host"
            endIcon={<ArrowForwardIcon />}
            onBtnClick={() => alert('Contacting Host')}
          />
        </div>
      </CenterContainer>
      <Navbar />
    </div>
  )
}