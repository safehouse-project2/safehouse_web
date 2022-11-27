import AppText from "../AppText/AppText";
import { useEffect, useRef } from "react";
import Card from '../Cards/Card';


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
            <div className="flex flex-col">
            
            <Card
              src="assistance.jpg"
              title='Wildfire Assistance'
              description='Resources for more information to help keep yourself safe'
              btnText1='BC Wildfire Service'
              btnText2='Emergency Management BC'
              />   
            
                {/* <AppText
                    fontSize="20px"
                    fontWeight="bold"
                    color="#20514B"
                    txt="Wildfire Assistance:"
                />
                <div ref={EmMgmntRef}>
                    <AppText txt="Emergency Management BC" textDecoration="underline" />
                </div>

                <div ref={BcWildFireService}>
                    <AppText txt="BC Wildfire Service.ca" textDecoration="underline" />
                </div>
                <div ref={ERA}>
                    <AppText txt="Evacuee Registration & Assistance (ERA)" textDecoration="underline" />
                </div> */}


            </div>

            <div className="flex flex-col">
                {/* <AppText
                    fontSize="20px"
                    fontWeight="bold"
                    color="#20514B"
                    txt="Wildfire Preparedness:"
                />
                <div ref={PrepareGuide}>
                    <AppText txt="Wildfire Preparedness Guide.pdf" textDecoration="underline" />
                </div>
                <div>
                <AppText txt="FireSmartBC.ca" textDecoration="underline"/>
                </div>
                <div>
                <AppText txt="Provinical Health Services Authority.ca" textDecoration="underline"/>
                </div>
                <div>
                <AppText txt="FireSmart Homeowner's Manual.pdf" textDecoration="underline" />
                </div> */}

                <Card
                src="backpack.jpg"
                title='Wildfire Preparedness'
                description='dditonal resources to help prepare yourself in an event of an evacuation'
                btnText1='FireSmartBC.ca'
                btnText2='PreparedBC'
                btnText3='Wildfire Preparedness Guide'
                //btnText4='Provinical Health Services Authority'
                />   
          
            </div>

            <div className="flex flex-col">
                <AppText
                    fontSize="20px"
                    fontWeight="bold"
                    color="#20514B"
                    txt="Emergency Contact:"
                />
                <AppText txt="Fire Department, RCMP and BC Ambulance: 9-1-1" />
                <AppText txt="Emergency Operations Centre (EOC): 250-490-4225" />
                <AppText txt="Emergency Support Services (ESS) for Evacuees: 250-486-1890" />
            </div>
            
        </div>
    )
}