import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';

export default function Navbar({
    btnState = "inactive",
    onBtnClick = () => { },
}) {
    let homeBgColor = "#272727";

    return (
        <div className='flex justify-around bg-slate-500 py-3 text-white sticky'>

            {/* Home */}
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <HomeOutlinedIcon />
                Home
            </div>

            {/*Chat */}
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <MarkUnreadChatAltOutlinedIcon />
                Chat
            </div>

            {/* Help */}
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <HelpOutlineIcon />
                Help
            </div>

            {/* Profile */}
            <div className='flex flex-col items-center justify-center cursor-pointer'>
                <AccountCircleOutlinedIcon />
                Profile
            </div>
        </div>
    )
}