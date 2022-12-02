import AppText from "../AppText/AppText";
import CircleIcon from "@mui/icons-material/Circle";
import Face6Icon from "@mui/icons-material/Face6";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

export default function Info({
  state = {
    province: "",
    city: "",
    guests: "",
    bedrooms: "",
    beds: "",
    baths: "",
    isEdit: false,
    userName: "",
  },
}) {
  const [Favorite, setFavorite] = useState(true);

  return (
    <div className="flex flex-col gap-2 pt-3">
      <div className="flex pr-5 gap-14">
        <AppText
          txt={
            state?.bedrooms
              ? `${state.bedrooms} Bedroom suite available for wildfire evacuees`
              : "No title provided by the host"
          }
          fontSize="18px"
          fontWeight="500"
        />
        {Favorite ? (
          <FavoriteBorderIcon
            sx={{
              color: "grey",
              cursor: "pointer",
            }}
            onClick={() => setFavorite(!Favorite)}
          />
        ) : (
          <FavoriteIcon
            sx={{
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => setFavorite(!Favorite)}
          />
        )}
      </div>
      <div className="flex flex-row gap-3 pr-[20px]">
        <AppText
          txt={state?.guests ? `${state.guests} guests` : "No guests"}
          fontSize="14px"
          fontWeight="400"
        />
        <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
        <AppText
          txt={state?.bedrooms ? `${state.bedrooms} bedrooms` : "No bedrooms"}
          fontSize="14px"
          fontWeight="400"
        />
        <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
        <AppText
          txt={state?.beds ? `${state.beds} beds` : "No bed"}
          fontSize="14px"
          fontWeight="400"
        />
        <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
        <AppText
          txt={
            state?.bathrooms ? `${state.bathrooms} bathrooms` : "No bathrooms"
          }
          fontSize="14px"
          fontWeight="400"
        />
      </div>
      <div className="flex mt-3 flex-col gap-3">
        <AppText
          txt={`${state.addressLine1 ? state.addressLine1 : " "} ${state.city ? state.city : " "
            } ${state.province ? state.province : " "}` }
          color="#8C8C8C"
          fontSize="16px"
          fontWeight="400"
        />
      </div>
      <div className="flex mt-4 flex-row gap-3 items-center">
        <Face6Icon sx={{}} />
        <AppText
          txt={`Hosted by ${state?.userName ? state.userName : ""}`}
          fontSize="16px"
          fontWeight="600"
        />
      </div>
    </div>
  );
}
