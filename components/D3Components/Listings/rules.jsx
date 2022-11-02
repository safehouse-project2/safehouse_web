import AppText from "../AppText/AppText";

export default function Rules({
  state = {
    petsAllowed: "yes",
    smokingAllowed: "yes",
  },
}) {
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
        {/* needs to make icon for pet and smoking */}
        <AppText
          txt={state?.petsAllowed ? "Pet: Allowed" : "Pet: No Allowed"}
          color="#272727"
          fontSize="16px"
          fontWeight="500"
        />
        <AppText
          txt={
            state.smokingAllowed ? "Smoking: Allowed" : "Smoking: No Allowed"
          }
          color="#272727"
          fontSize="16px"
          fontWeight="500"
        />
        {/* <AppText
          txt="- Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color="#272727"
          fontSize="12px"
          fontWeight="400"
        /> */}
      </div>
    </div>
  );
}
