import styled from 'styled-components';

// import HomeIcon from '@mui/icons-material/Home';

import AppText from '../AppText/AppText';
import Header from '../Header/Header';
import Icon from '../Icon/Icon';


export const LegendWrapper = styled.div
`
padding: 20px;
`

export const LegendIcon = styled(Icon)
`
color: ${props=>props.ic||"#777777"};
`

export const LegendCard = styled.div
`
display:flex;
justify-content: flex-start;
align-items:centre;
background: #F5F5F5;
box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13);
width: 200px;
padding:15px;

`

export default function Legend (){

    return <LegendWrapper>
    <LegendCard>
        <Header txt='Map Legend' hSize='18px'/>
        <Icon/> <AppText txt='Safe House'/>
        <Icon/> <AppText txt='Wildfire'/>
    </LegendCard>
    </LegendWrapper>
}