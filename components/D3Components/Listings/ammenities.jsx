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
    <div>
      <div className="flex mt-5 flex-col gap-4">
        <AppText
          txt="Ammenities"
          fontWeight="500"
          color="black"
          fontSize="16px"
        />
      </div>

      <div className="flex mt-3 flex-row gap-3">
        <WifiIcon sx={{ marginLeft: "15px" }} />
        <AppText
          txt={state?.wifi ? "Wifi" : "No Wifi"}
          color="black"
          fontSize="15px"
          fontWeight="500"
        />
        <TvIcon sx={{ marginLeft: "47px" }} />
        <AppText
          txt={state?.tv ? "TV" : "No TV"}
          color="black"
          fontSize="15px"
          fontWeight="500"
        />
        <AutoStoriesIcon sx={{ marginLeft: "37px" }} />
        <AppText txt="Books" color="black" fontSize="15px" fontWeight="500" />
      </div>
      <div className="flex mt-3 flex-row gap-3">
        <LocalLaundryServiceIcon sx={{ marginLeft: "15px" }} />
        <AppText
          txt={state?.washer ? "Washer" : "No washer"}
          color="black"
          fontSize="15px"
          fontWeight="500"
        />
        <DryCleaningIcon sx={{ marginLeft: "20px" }} />
        <AppText
          txt={state?.dryer ? "Dryer" : "No Dryer"}
          color="black"
          fontSize="15px"
          fontWeight="500"
        />
        <CheckroomIcon sx={{ marginLeft: "20px" }} />
        <AppText txt="Hangers" color="black" fontSize="15px" fontWeight="500" />
      </div>
    </div>
  );
}
