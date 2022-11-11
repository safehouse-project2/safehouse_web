import { BackgroundContainer } from '../styles/styledComps'
import Mockups from '../components/D3Components/Welcome/Mockups'
import Intro from "../components/D3Components/Welcome/Intro";

export default function Welcome() {
    return (
        <>
            <BackgroundContainer src='./bg_overlay.png' className="">
                <div className="flex px-8 py-3 parentWelcome">
                    <Intro />
                    <Mockups />
                </div>
            </BackgroundContainer>
        </>
    )
}