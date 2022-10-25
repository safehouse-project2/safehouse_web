import AppText from "../AppText/AppText";

export default function Description({ state }) {
  const { description } = state;
  return (
    <div>
      <div className="flex mt-5 flex-col gap-4">
        <AppText
          txt={description}
          color="black"
          fontSize="16px"
          fontWeight="500"
        />
        <AppText
          txt={description}
          color="#272727"
          fontSize="12px"
          fontWeight="400"
        />
      </div>
    </div>
  );
}

