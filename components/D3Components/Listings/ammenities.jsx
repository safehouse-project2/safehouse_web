import styled from "styled-components"
import AppText from "../AppText/AppText";
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import CheckroomIcon from '@mui/icons-material/Checkroom';


export default function Ammenities({
  }){

  return ( <div>

    <div className='flex mt-5 flex-col gap-4'>
        
        <AppText
            txt='Ammenities'
            fontWeight='500'
            color='black'
            fontSize='16px'
        />
    </div>

    <div className='flex mt-3 flex-row gap-3'>
        <WifiIcon sx={{ marginLeft:"15px"}}/>
        <AppText
            txt='Wifi'
            color='black'
            fontSize='15px'
            fontWeight='500'
        />
        <TvIcon sx={{ marginLeft:"47px"}}/>
        <AppText
            txt='TV'
            color='black'
            fontSize='15px'
            fontWeight='500'
        />
        <AutoStoriesIcon sx={{ marginLeft:"37px"}}/>
        <AppText
            txt='Books'
            color='black'
            fontSize='15px'
            fontWeight='500'
        />
        </div>
        <div className='flex mt-3 flex-row gap-3'>
        <LocalLaundryServiceIcon sx={{ marginLeft:"15px"}}/>
        <AppText
            txt='Washer'
            color='black'
            fontSize='15px'
            fontWeight='500'
        />
        <DryCleaningIcon sx={{ marginLeft:"20px"}}/>
        <AppText
            txt='Dryer'
            color='black'
            fontSize='15px'
            fontWeight='500'
        />
        <CheckroomIcon sx={{ marginLeft:"20px"}}/>
        <AppText
            txt='Hangers'
            color='black'
            fontSize='15px'
            fontWeight='500'
        />
    </div>

        </div>
    )
}
