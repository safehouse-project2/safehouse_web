import AppText from "../AppText/AppText";
import ResourceCards from "./ResourceCards/ResourceCards";
import AccordionComp from "../Accordion/EmergencyAccordion";


export default function QuickLinks() {

    // const Loc1 = () => {
    //     window.open("https://www2.gov.bc.ca/gov/content/safety/emergency-management", "_blank")
    // }

    // const Loc2 = () => {
    //     window.open("https://www2.gov.bc.ca/gov/content/safety/wildfire-status", "_blank")
    // }

    // const Loc3 = () => {
    //     window.open("https://ess.gov.bc.ca/", "_blank")
    // }

    // const Loc4 = () => {
    //     window.open("https://www2.gov.bc.ca/assets/gov/public-safety-and-emergency-services/emergency-preparedness-response-recovery/embc/preparedbc/preparedbc-guides/wildfire_preparedness_guide.pdf", "_blank")
    // }

    // const EmMgmntRef = useRef(null);
    // const BcWildFireService = useRef(null);
    // const ERA = useRef(null);
    // const PrepareGuide = useRef(null);

    // useEffect(() => {
    //     const FirstLinkCont = EmMgmntRef.current;
    //     const SecondLinkCont = BcWildFireService.current;
    //     const ThirdLinkCont = ERA.current;
    //     const FourthLinkCont = PrepareGuide.current;

    //     FirstLinkCont.addEventListener('click', Loc1);
    //     SecondLinkCont.addEventListener('click', Loc2);
    //     ThirdLinkCont.addEventListener('click', Loc3);
    //     FourthLinkCont.addEventListener('click', Loc4);
    // })

    return (
        <div className="flex flex-col justify-start items-start gap-[30px]">
            <div className="m-auto">
                <ResourceCards />
            </div>
            <div className="flex flex-col">
                <AccordionComp />
            </div>

        </div>
    )
}