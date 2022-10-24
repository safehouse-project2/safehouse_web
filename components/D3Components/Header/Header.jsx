import styled from 'styled-components';

const TitleStyle = styled.p
`
font-family: Woodman;
font-size:  ${props=>props.fs||"20px"};
color: ${props=>props.color||"black"};
`
export default function Title({
    txt="Title",
    hSize="20px",
    color="black",
}){
    return <div>
        <TitleStyle color={color} fs={hSize}>{txt}</TitleStyle>
    </div>
}