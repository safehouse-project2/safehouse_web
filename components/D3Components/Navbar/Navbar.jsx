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
import MapIcon from '@mui/icons-material/Map';
import { styled } from '@mui/material/styles';

const MyBottomNavigationAction = styled(BottomNavigationAction)(`
  color: #666666;
  &.Mui-selected {
    color: #5581AA;
  }
`);

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
    const goToMap = () => {
        r.push("/location");
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
                        <MyBottomNavigationAction label="Home" value={"/userhome"} icon={<HomeIcon />} onClick={goToHome} />
                        <MyBottomNavigationAction label="Map" icon={<MapIcon />} value={"/location"} onClick={goToMap} />
                        <MyBottomNavigationAction label="Resources" icon={<HelpIcon />} value={"/resources"} onClick={goToHelp} />
                        <MyBottomNavigationAction label="Profile" icon={<AccountCircleIcon />} value={"/profile"} onClick={goToProfile} />
                    </BottomNavigation>
                </Paper>
            </Box>
        )
    }
}

const navStyles = {
    inActive: {
        color: "grey"
    },
    active: {
        color: "red"
    }
};