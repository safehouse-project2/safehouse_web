import {
  BackgroundContainer,
  MainContainer,
} from "../styles/styledComps";
import Navbar from "../components/D3Components/Navbar/Navbar";
import UpperHalf from "../components/D3Components/Resources/UpperHalf";
import Cards from "../components/D3Components/Resources/Cards";

export default function resources() {


  return (
    <div className="overflow-x-auto">
      <BackgroundContainer src="blobBG.svg">
        <MainContainer>
          <div className="flex flex-col pb-20 px-4">
            <UpperHalf />
            <Cards />
            <Navbar />
          </div>
        </MainContainer>
      </BackgroundContainer>
    </div>
  );
}
