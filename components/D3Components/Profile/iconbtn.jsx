import AppText from "../AppText/AppText";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SortIcon from '@mui/icons-material/Sort';


export default function Iconbtn({
}) {

    return (
        <div className="flex flex-col gap-6">
            <div className='flex flex-row gap-3'>
                <PersonIcon sx={{ color: "#CDCDCD" }} />
                <AppText
                    txt='Personal Information'
                    color='#CDCDCD'
                    fontSize='16px'
                    fontWeight='500'
                />
            </div>

            <div className='flex flex-row gap-3'>
                <VerifiedUserIcon sx={{ color: "#CDCDCD" }} />
                <AppText
                    txt='Account Security'
                    color='#CDCDCD'
                    fontSize='16px'
                    fontWeight='500'
                />
            </div>

            <div className='flex flex-row gap-3'>
                <SortIcon sx={{ color: "#CDCDCD" }} />
                <AppText
                    txt='My Listings'
                    color='#CDCDCD'
                    fontSize='16px'
                    fontWeight='500'
                />
            </div>

            <div className='flex flex-row gap-3'>
                <FavoriteIcon sx={{ color: "#CDCDCD" }} />
                <AppText
                    txt='My Wishlist'
                    color='#CDCDCD'
                    fontSize='16px'
                    fontWeight='500'
                />
            </div>
        </div>
    )
}