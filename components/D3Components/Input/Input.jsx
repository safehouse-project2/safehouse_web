import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
// import { styled } from '@mui/material/styles';

const TextBox = styled(TextField)`
    border-radius: 8px;
    padding: ${(props) => props.padding || "0px 0px 0px 0px"} !important;
    margin: ${(props) => props.margin || "0px 0px 0px 0px"} !important;
    background-color: ${(props) => props.backgroundColor || "#ECECEC"};
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight};
    font-family: 'Poppins', sans-serif;
    border: 0px;
    ::placeholder {
        color: #B0B0B0;
        opacity: 1;
    }
`

const styles = {
    floatingLabelFocusStyle: {
        color: "#B0B0B0",
    }
}

export default function Input({
    label = "Default Label",
    variant = "filled",
    size = "small",
    color = "",
    type = "text",
    defaultValue = "",
    placeholder = "",
    maxWidth = "",
    maxHeight = "",
    margin = "0px 0px 0px 0px",
    padding = "0px 0px 0px 0px",
    icon = <SearchIcon />,
    backgroundColor = "#ECECEC",
}) {
    return (
        <TextBox
            sx={{
                border: 0,
            }}
            label={label}
            placeholder={placeholder}
            variant={variant}
            size={size}
            margin={margin}
            padding={padding}
            color={color}
            type={type}
            backgroundColor={backgroundColor}
            defaultValue={defaultValue}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            iconI={icon}
            InputLabelProps={{
                style: styles.floatingLabelFocusStyle,
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                )
            }}
        />
    )
}

/* 

Form props:

1. required
2. disabled
3. password
4. for readonly-
    InputProps={{
        readOnly: true,
    }}
5. number

*/