import AppText from "../AppText/AppText"
import { useEffect, useRef } from "react"

export default function QuickLinks() {

    const Loc1 = () => {
        window.open("https://www2.gov.bc.ca/gov/content/safety/emergency-management", "_blank")
    }

    const Loc2 = () => {
        window.open("https://www2.gov.bc.ca/gov/content/safety/wildfire-status", "_blank")
    }

    const Loc3 = () => {
        window.open("https://ess.gov.bc.ca/", "_blank")
    }

    const EmMgmntRef = useRef(null);
    const BcWildFireService = useRef(null);
    const ERA = useRef(null);

    useEffect(() => {
        const FirstLinkCont = EmMgmntRef.current;
        const SecondLinkCont = BcWildFireService.current;
        const ThirdLinkCont = ERA.current;

        FirstLinkCont.addEventListener('click', Loc1);
        SecondLinkCont.addEventListener('click', Loc2)
        ThirdLinkCont.addEventListener('click', Loc3)
    })

    return (
        <div className="flex flex-col justify-start items-start gap-[30px]">
            <div className="flex flex-col">
                <AppText
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
                </div>


            </div>

            <div className="flex flex-col">
                <AppText
                    fontSize="20px"
                    fontWeight="bold"
                    color="#20514B"
                    txt="Wildfire Preparedness:"
                />
                <AppText txt="Wildfire Preparedness Guide.pdf" />
                <AppText txt="FireSmartBC.ca" />
                <AppText txt="Provinical Health Services Authority.ca" />
                <AppText txt="FireSmart Homeowner's Manual.pdf" />
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