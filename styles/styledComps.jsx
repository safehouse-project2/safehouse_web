import styled from 'styled-components';
import Button from '@mui/material/Button';

export const OptionsBtn = styled(Button)`
    background-color: #f5f5f5 !important;
    text-transform: none;
    font-weight: normal;
    color: #8C8C8C;
    border-radius: 4px;
    :hover {
        background-color: #333;
    }
`;

export const BackgroundContainer = styled.div`
    background-image: url(${props => props.src});
    min-height: 100vh;
    // height: 100vh;
    min-width: 100vw;
    width:${(props) => props.width || "0"};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
`

export const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90vw;
`