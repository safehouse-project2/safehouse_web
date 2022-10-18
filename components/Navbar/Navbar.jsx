import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import { useRouter } from 'next/router';
// import { Input, Menu } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'

export default function Navbar({
    onBtnClick = () => { },
}) {
    let homeBgColor = "#272727";
    const r = useRouter();
    const goToHome = () => {
        r.push("/");
    }
    const goToChat = () => {
        r.push("/chat");
    }
    const goToHelp = () => {
        r.push("/help");
    }
    const goToProfile = () => {
        r.push("/profile");
    }

    const [homeState, setHomeState] = useState("inactive");

    return (
        <div className='flex justify-around bg-slate-500 py-3 text-white sticky'>

            {/* Home */}
            {
                homeState === "active" ? (
                    <div className='flex flex-col items-center justify-center cursor-pointer'>
                        <HomeOutlinedIcon />
                        Home
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center cursor-pointer' >
                        <HomeIcon />
                        Home
                    </div>
                )
            }

            {/*Chat */}
            <div className='flex flex-col items-center justify-center cursor-pointer' onClick={goToChat}>
                <MarkUnreadChatAltOutlinedIcon />
                Chat
            </div>

            {/* Help */}
            <div className='flex flex-col items-center justify-center cursor-pointer' onClick={goToHelp}>
                <HelpOutlineIcon />
                Help
            </div>

            {/* Profile */}
            <div className='flex flex-col items-center justify-center cursor-pointer' onClick={goToProfile}>
                <AccountCircleOutlinedIcon />
                Profile
            </div>
        </div>
    )
}
