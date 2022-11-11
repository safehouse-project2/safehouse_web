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
    backdrop-filter: ${(props) => props.backdropFilter || "none"};
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

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 90vw;
`

export const CounterBtn = styled(Button)`
    background-color: #f5f5f5 !important;
    color: #272727 !important;
`

export const CounterBtnVal = styled(Button)`
    background-color: rgba(255, 255, 255, 0) !important;
    color: #f5f5f5 !important;
`