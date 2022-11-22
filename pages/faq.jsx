import { BackgroundContainer, MainContainer } from "../styles/styledComps";
  import Navbar from "../components/D3Components/Navbar/Navbar";
  import FAQS from "../components/D3Components/Resources/FAQInput";
  
  export default function FAQPage() {
    return (
      <div className="overflow-x-auto">
        <BackgroundContainer src="blobBG.svg">
          <MainContainer>
            <div className="flex flex-col pb-20 px-4">
              <FAQS />
              <Navbar />
            </div>
          </MainContainer>
        </BackgroundContainer>
      </div>
    );
  }
  