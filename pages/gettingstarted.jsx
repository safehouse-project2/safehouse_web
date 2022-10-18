import styled from 'styled-components';

const BackgroundContainer = styled.div`
    background-image: url('./homeBG.png');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
`

export default function GettingStarted() {
    return (
        <BackgroundContainer>
            <h1>This is the getting started page</h1>
        </BackgroundContainer>
    )
}