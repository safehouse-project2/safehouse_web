import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
// import { styled } from '@mui/material/styles';

const TextBox = styled(TextField)`
    width:310px;
    border-radius: 8px;
`

export default function Input({
    txt="Enter Here",
    variant="outlined",
    size="small",
    color="success",

}){
    return <div>
        <TextBox label={txt} variant={variant} size={size} color={color} />
    </div>
}