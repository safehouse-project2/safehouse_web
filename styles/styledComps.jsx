import styled from 'styled-components';
import Button from '@mui/material/Button';

const OptionsBtn = styled(Button)`
    background-color: #272727;
    text-transform: none;
    font-weight: normal;
    color: #f5f5f5;
    border-radius: 4px;
    :hover {
        background-color: #333;
    }
`;
export default OptionsBtn;

const BackgroundImageContainer = styled.div`
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`