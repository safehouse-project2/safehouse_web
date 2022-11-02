import AppText from "../AppText/AppText";

export default function Description({
  state = {
    description: "",
  },
}) {
  return (
    <div className="flex mt-5 flex-col gap-4">
      <AppText
        txt={state?.description ? state.description : "No description"}
        color="black"
        fontSize="18px"
        fontWeight="500"
      />
    </div>
  );
}
