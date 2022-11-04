import React from 'react'
import { Button } from '@mui/material'
import AppText from '../D3Components/AppText/AppText'

export default function Popup() {
    return (
        <div>
            <AppText
                txt="You are not logged in. Please log in to continue."
                fontSize="34px"
                color="#f5f5f5"
            />
            <Button href='/auth/login'>login</Button>
            
        </div>
    )
}
