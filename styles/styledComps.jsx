import styled from 'styled-components';
import Button from '@mui/material/Button';

export const OptionsBtn = styled(Button)`
    background-color: #272727;
    text-transform: none;
    font-weight: normal;
    color: #f5f5f5;
    border-radius: 4px;
    :hover {
        background-color: #333;
    }
`;

export const BackgroundContainer = styled.div`
    background-image: url(${props => props.src});
    width: 100vw;
    height: 100vh;
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