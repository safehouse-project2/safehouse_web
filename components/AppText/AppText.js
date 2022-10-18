import styled from 'styled-components';


const Body = styled.p
`
font-family: Poppins;
font-size: ${props=>props.fs||"14px"};
`

export default function AppText({
    bSize="14px"
}){
    return <div>
        <Body fs={bSize}>Body</Body>
    </div>
}