import AppText from "../AppText/AppText";

export default function Description({
  state = {
    address: "",
    lat: "",
    lng: "",
    country: "",
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
      <div className="flex mt-5 flex-col gap-4">
        <AppText
          txt={state.description ? state.description : "No description"}
          color="black"
          fontSize="16px"
          fontWeight="500"
        />
        <AppText
          txt={state.description ? state.description : "No description"}
          color="#272727"
          fontSize="12px"
          fontWeight="400"
        />
      </div>
    </div>
  );
}
