// import React from 'react'

import AppText from '../D3Components/AppText/AppText'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useRouter } from 'next/router';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Popup() {
    const [open, setOpen] = React.useState(true);
    const r = useRouter();
    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <div>
            {/* <AppText
                txt="You are not logged in. Please log in to continue."
                fontSize="34px"
                color="#f5f5f5"
            /> b
            <Button href='/auth/login'>login</Button> */}
            <Stack spacing={2} sx={{ width: '100%' }}>
                {/* <Button variant="outlined" onClick={handleClick}>
                    Open success snackbar
                </Button> */}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        You are not logged in! Please log in to continue.
                        <button
                            className='text-[#F0E6D9] text-[1rem] hover:text-[#d1c9bd] transition-all ml-3'
                            onClick={() => r.push('/auth/login')}
                        >
                            Login
                        </button>
                    </Alert>
                </Snackbar>
            </Stack>
        </div>
    )
}
