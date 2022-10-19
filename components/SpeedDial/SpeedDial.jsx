import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import { useRouter } from 'next/router';


export default function BasicSpeedDial({
    onBtnClick = () => { },
}) {
    const r = useRouter()
    const actions = [
        { icon: <FavoriteBorderOutlinedIcon onClick={() => { console.log("Fav clicked") }} />, name: 'Add to wishlist' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    return (
        <div className='speeddialBtn z-999 sticky'>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </div>
    );
};