import styled from 'styled-components';

const TitleStyle = styled.p
`
font-family: Woodman;
font-size:  ${props=>props.fs||"20px"};
`
export default function Title({
    txt="Title",
    hSize="20px",
}){
    return <div>
        <TitleStyle fs={hSize}>{txt}</TitleStyle>
    </div>
}