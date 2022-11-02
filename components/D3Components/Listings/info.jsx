import AppText from "../AppText/AppText";
import CircleIcon from "@mui/icons-material/Circle";
import Face6Icon from "@mui/icons-material/Face6";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Info({
  state = {
    province: "",
    city: "",
    guests: "",
    bedrooms: "",
    beds: "",
    baths: "",
  },
}) {
  return (
    <div>
      <div className="flex mt-3 gap-14">
        <AppText
          txt={
            state?.bedrooms
              ? `${state.bedrooms}Bedroom suite available for wildfire evacuees`
              : "Sorry we don't have any suites available for wildfire evacuees at this time"
          }
          color="black"
          fontSize="16px"
          fontWeight="500"
        />
        <FavoriteIcon sx={{ color: "#FF5F5F", marginLeft: "20px" }} />
      </div>
      <div className="flex mt-3 flex-row gap-3">
        <AppText
          txt={state?.guests ? `${state.guests} guests` : "No guests"}
          color="#272727"
          fontSize="14px"
          fontWeight="400"
        />
        <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
        <AppText
          txt={state?.bedrooms ? `${state.bedrooms} bedrooms` : "No bedrooms"}
          color="#272727"
          fontSize="14px"
          fontWeight="400"
        />
        <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
        <AppText
          txt={state?.beds ? `${state.beds} beds` : "No bed"}
          color="#272727"
          fontSize="14px"
          fontWeight="400"
        />
        <CircleIcon sx={{ fontSize: 10, color: "#B38A58", margin: "5px" }} />
        <AppText
          txt={
            state?.bathrooms ? `${state.bathrooms} bathrooms` : "No bathrooms"
          }
          color="#272727"
          fontSize="14px"
          fontWeight="400"
        />
      </div>
      <div className="flex mt-3 flex-col gap-3">
        <AppText
          txt={state?.city ? `${state.city} , ${state.province}` : "No city"}
          color="#8C8C8C"
          fontSize="14px"
          fontWeight="400"
        />
      </div>
      <div className="flex mt-7 flex-row gap-4">
        <Face6Icon sx={{ marginLeft: "20px" }} />
        <AppText
          txt={"Hosted by " + "John"}
          color="black"
          fontSize="16px"
          fontWeight="600"
        />
      </div>
    </div>
  );
}
