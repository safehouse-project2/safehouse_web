import {
  BackgroundContainer,
  MainContainer,
} from "../styles/styledComps";
import Navbar from "../components/D3Components/Navbar/Navbar";
import UpperHalf from "../components/D3Components/Resources/UpperHalf";
import Cards from "../components/D3Components/Resources/Cards";

export default function resources() {

  return (
    <div className="overflow-x-auto bg-[#F0E6D9] h-[100vh]">
      <MainContainer>
        <div className="flex flex-col pb-20 px-4">
          <UpperHalf
            title="Need help?"
            subtitle="Welcome to our help section!"
            img="./OnlineWomenTalking.png"
          />
          <Cards />
          <Navbar />
        </div>
      </MainContainer>
    </div>
  );
}
