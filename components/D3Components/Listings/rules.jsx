import AppText from "../AppText/AppText";

export default function Rules({ state }) {
  const { petsAllowed, smokingAllowed } = state;
  return (
    <div>
      <div className="flex mt-5 flex-col gap-4">
        <AppText
          txt="House Rules"
          color="black"
          fontSize="16px"
          fontWeight="500"
        />
      </div>
      <div className="flex mt-5 flex-col gap-3">
        <AppText
          txt={petsAllowed}
          color="#272727"
          fontSize="12px"
          fontWeight="400"
        />
        <AppText txt={smokingAllowed} fontSize="12px" fontWeight="400" />
        <AppText
          txt="- Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color="#272727"
          fontSize="12px"
          fontWeight="400"
        />
      </div>
    </div>
  );
}
