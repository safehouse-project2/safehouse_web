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

    const [value, setValue] = React.useState(null);
    const ref = React.useRef(null);

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
    }, []);



    if (r.pathname == ('/', '/host')) {
        return <div>
            <Box ref={ref} />
        </div>
    } else {
        return (
            <Box sx={{
                borderRadius: "13px 13px 0px 0px",
            }} ref={ref}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={r.pathname}
                        onChange={(event, newValue) => {
                            console.log(newValue);
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Home" value={"/userhome"} icon={<HomeIcon />} onClick={goToHome} />
                        <BottomNavigationAction label="Chat" icon={<Chat />} value={"/chat"} onClick={goToChat} />
                        <BottomNavigationAction label="Resources" icon={<HelpIcon />} value={"/resources"} onClick={goToHelp} />
                        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} value={"/profile"} onClick={goToProfile} />
                    </BottomNavigation>
                </Paper>
            </Box>
        )
    }
}

// sx={{ borderRadius: '20px' }}