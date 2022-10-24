import AppText from "../AppText/AppText";
import PinDropIcon from '@mui/icons-material/PinDrop';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


export default function Info({
  }){

  return ( <div>

    <div className='flex mr-3 flex-row gap-10'>
    <div className='flex mt-3 flex-row gap-1'>
        <AppText
            txt='Burnaby, BC'
            color='#FFFFFF'
            fontSize='15px'
            fontWeight='400'
        />
        <PinDropIcon sx={{ color:"#F5F5F5", marginLeft:"15px"}}/>
    </div>

    <div className='flex mt-3 flex-row gap-1'>
        <AppText
            txt='About Me'
            color='#FFFFFF'
            fontSize='15px'
            fontWeight='400'
        />
        <AccountBoxIcon sx={{ color:"#F5F5F5", marginLeft:"15px"}}/>
    </div>
    </div>
    
    <div className='flex mt-3 flex-row gap-2'>
        <AppText
            txt='Verified with BC Services Card ending in'
            color='#CDCDCD'
            fontSize='15px'
            fontWeight='500'
        />
        <AppText
            txt='2147'
            color='#F5F5F5'
            fontSize='15px'
            fontWeight='700'
        />
    </div>
    
        
        </div>
    )
}