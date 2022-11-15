import AppText from "../AppText/AppText";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRouter } from "next/router";

export default function Iconbtn() {
  const r = useRouter();

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

            <div className='flex flex-row gap-3' onClick={() => { r.push('/list') }}>
                <SortIcon sx={{ color: "#CDCDCD" }} />
                <AppText
                    txt='View My Listings'
                    color='#CDCDCD'
                    fontSize='16px'
                    fontWeight='500'
                />
                <KeyboardArrowRightIcon
                    fontSize="medium"
                    style={{ fill: "#f5f5f5" }}
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