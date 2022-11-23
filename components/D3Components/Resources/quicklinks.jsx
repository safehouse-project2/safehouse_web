import AppText from "../AppText/AppText"
import { motion } from "framer-motion"

export default function QuickLinks() {
    return (
        <div className="flex flex-col justify-center items-center gap-[30px]">
            <div className="flex flex-col">
                <AppText
                    fontSize="20px"
                    fontWeight="bold"
                    color="#20514B"
                    txt="Wildfire Assistance:"
                />
                <AppText txt="Emergency Management BC" />
                <AppText txt="BC Wildfire Service.ca" />
                <AppText txt="Evacuee Registration & Assistance" />

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