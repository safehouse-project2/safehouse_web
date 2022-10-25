import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Chat } from '@mui/icons-material';
import HelpIcon from '@mui/icons-material/Help';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#ECECEC',
        },
        secondary: {
            main: '#ECECEC',
        },
    },
})


export default function Navbar({
    onBtnClick = () => { },
    // homeColor = "red",
    // chatColor = "red",
    // helpColor = "red",
    // profileColor = "red",
}) {
    const r = useRouter();
    const goToHome = () => {
        r.push("/userhome");
    }
    const goToChat = () => {
        r.push("/chat");
    }
    const goToHelp = () => {
        r.push("/resources");
    }
    const goToProfile = () => {
        r.push("/profile");
    }
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [color, setColor] = useState("#959595");

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
    }, []);

    return (
        <Box sx={{
            borderRadius: "13px 13px 00px 0px",
        }} ref={ref}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={goToHome} sx={{
                        // color: { homeColor },
                    }} />
                    <BottomNavigationAction label="Chat" icon={<Chat />} onClick={goToChat} sx={{
                        // color: { chatColor },
                    }} />
                    <BottomNavigationAction label="Resources" icon={<HelpIcon />} onClick={goToHelp} sx={{
                        // color: { helpColor },
                    }} />
                    <BottomNavigationAction label="Profile" icon={<AccountCircleIcon onClick={goToProfile} sx={{
                        // color: { profileColor },
                    }} />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

// sx={{ borderRadius: '20px' }}