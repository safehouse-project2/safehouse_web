import styled from "styled-components";
import AppText from "../AppText/AppText";
import WifiIcon from "@mui/icons-material/Wifi";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AccessibleIcon from '@mui/icons-material/Accessible';

export default function Ammenities({
  state = {
    wifi: "",
    space: "",
    food: "",
    accessible: "",
  },
}) {
  return (
    <div className="flex flex-col gap-4 pt-4">

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
            <DirectionsCarIcon />
            <AppText
              txt={state?.space ? "Space for Cars or RVs" : "No Space for Cars and RVs"}
              fontSize="15px"
              fontWeight="500"
            />
          </div>

        </div>

        <div className="flex flex-row justify-between w-[100%]">
          <div className="flex gap-2">
            <LocalDiningIcon />
            <AppText
              txt={state?.food ? "Food Provided" : "No Food Provided"}
              fontSize="15px"
              fontWeight="500"
            />
          </div>

          <div className="flex gap-2">
            <AccessibleIcon />
            <AppText
              txt={state?.accessible ? "Wheelchair Accessible" : "Not Wheelchair Accessible"}
              color="black"
              fontSize="15px"
              fontWeight="500"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
