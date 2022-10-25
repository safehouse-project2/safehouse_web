import AppText from "../AppText/AppText";
import CircleIcon from '@mui/icons-material/Circle';
import Face6Icon from '@mui/icons-material/Face6';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Info({
}) {

    return (
        <div className="flex flex-col gap-2">
            <div className='flex gap-14'>
                <AppText
                    txt='One Bedroom suite available for wildfire evacuees'
                    fontSize='18px'
                    fontWeight='500'
                />
                <FavoriteIcon sx={{ color: "#FF5F5F" }} />
            </div>
            <div className='flex flex-row gap-3'>
                <AppText
                    txt='4 guests'
                    color='#272727'
                    fontSize='14px'
                    fontWeight='400'
                />
                <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
                <AppText
                    txt='2 bedrooms'
                    color='#272727'
                    fontSize='14px'
                    fontWeight='400'
                />
                <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
                <AppText
                    txt='2 beds'
                    color='#272727'
                    fontSize='14px'
                    fontWeight='400'
                />
                <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
                <AppText
                    txt='1.5 baths'
                    color='#272727'
                    fontSize='14px'
                    fontWeight='400'
                />
            </div>
            <div className='flex flex-col pt-3'>
                <AppText
                    txt='Burnaby, British Columbia'
                    color='#8C8C8C'
                    fontSize='16px'
                    fontWeight='400'
                />
            </div>
            <div className='flex mt-4 flex-row gap-3 items-center'>
                <img src="http://placekitten.com/40" alt="" className="rounded-full" />
                <AppText
                    txt='John Doe'
                    fontSize='16px'
                    fontWeight='600'
                />
            </div>


        </div>
    )
}