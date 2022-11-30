import AppText from "../AppText/AppText";

export default function Description({
  state = {
    description: "",
  },
}) {
  return (
    <div className="flex flex-col gap-2 pt-4">
      <AppText
        txt='Description'
        fontSize='18px'
        fontWeight='500'
      />
      <AppText
        txt={state?.description ? state.description : "No description provided"}
        fontSize="16px"
        fontWeight="300"
      />
    </div>
  );
}
