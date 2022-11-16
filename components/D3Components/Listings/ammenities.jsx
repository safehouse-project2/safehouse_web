import styled from "styled-components";
import AppText from "../AppText/AppText";
import WifiIcon from "@mui/icons-material/Wifi";
import TvIcon from "@mui/icons-material/Tv";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import CheckroomIcon from "@mui/icons-material/Checkroom";

export default function Ammenities({
  state = {
    wifi: "",
    tv: "",
    laundry: "",
    washer: "",
    dryer: "",
  },
}) {
  return (
    <div className="flex flex-col gap-4">

      {/* Ammenities word container */}
      <div className="flex flex-col pt-5">
        <AppText
          txt="Ammenities"
          fontWeight="500"
          fontSize="18px"
        />
      </div>

      {/* Ammenities */}
      <div className="flex flex-col items-end gap-5 pr-10">
        <div className="flex flex-row justify-between w-[100%]">
          <div className="flex gap-2">
            <WifiIcon />
            <AppText
              txt={state?.wifi ? "Wifi" : "No Wifi"}
              fontSize="15px"
              fontWeight="500"
            />
          </div>

          <div className="flex gap-2">
            <TvIcon />
            <AppText
              txt={state?.tv ? "TV" : "No TV"}
              fontSize="15px"
              fontWeight="500"
            />
          </div>

          <div className="flex gap-2">
            <AutoStoriesIcon />
            <AppText
              txt="Books"
              fontSize="15px"
              fontWeight="500"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between w-[100%]">
          <div className="flex gap-2">
            <LocalLaundryServiceIcon />
            <AppText
              txt={state?.washer ? "Washer" : "No washer"}
              fontSize="15px"
              fontWeight="500"
            />
          </div>

          <div className="flex gap-2">
            <DryCleaningIcon />
            <AppText
              txt={state?.dryer ? "Dryer" : "No Dryer"}
              color="black"
              fontSize="15px"
              fontWeight="500"
            />
          </div>

          <div className="flex gap-2">
            <CheckroomIcon />
            <AppText
              txt="Hangers"
              fontSize="15px"
              fontWeight="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
