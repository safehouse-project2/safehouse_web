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

export default function Navbar({
    onBtnClick = () => { },
}) {
    const r = useRouter();
    const goToHome = () => {
        r.push("/userhome");
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
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
    }, []);

    return (
        <Box sx={{}} ref={ref}>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={goToHome} />
                    <BottomNavigationAction label="Chat" icon={<Chat />} onClick={goToChat} />
                    <BottomNavigationAction label="Help" icon={<HelpIcon />} onClick={goToHelp} />
                    <BottomNavigationAction label="Profile" icon={<AccountCircleIcon onClick={goToProfile} />} />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

// sx={{ borderRadius: '20px' }}