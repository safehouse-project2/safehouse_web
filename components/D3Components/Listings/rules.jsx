import AppText from "../AppText/AppText";

export default function Rules({
  state = {
    petsAllowed: "yes",
    smokingAllowed: "yes",
  },
}) {
  return (
    <div className="flex flex-col pt-8 gap-3">
      <div className="flex flex-col gap-4">
        <AppText
          txt="House Rules"
          fontSize="18px"
          fontWeight="500"
        />
      </div>

      <div className="flex flex-col gap-3">
        {/* needs to make icon for pet and smoking */}
        <AppText
          txt={state?.petsAllowed ? "Pets: Allowed" : "Pets: Not Allowed"}
          fontSize="14px"
          fontWeight="500"
        />
        <AppText
          txt={state.smokingAllowed ? "Smoking: Allowed" : "Smoking: No Allowed"}
          fontSize="14px"
          fontWeight="500"
        />
      </div>
    </div>
  );
}
