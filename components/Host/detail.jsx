import ReservationBox from "../D3Components/ReservationBox/ReservationBox";
import AppText from "../D3Components/AppText/AppText";
import { useAuth } from "../../AuthContext/AuthContext";
import { useState, useEffect, useRef } from "react";
import CreatHomePost from "../hostPosting/CreatHomePost";
import Script from "next/script";
import { AuthProvider } from "../../AuthContext/AuthContext";
import { BackgroundContainer } from "../../styles/styledComps";

export default function HostDetail({
  state = [{ userId: "" }, { userId: "" }],
}) {
  const [data, setData] = useState(state);
  const { currentUser } = useAuth();
  useEffect(() => {
    if (state.length > 0) {
      setData(state.filter(item => item.userId === currentUser.uid));
    }
  }, [state]);
  const findCurrentPage = id => {
    if (data.length) {
      return data.findIndex(obj => obj.id === id);
    }
    return;
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <AppText
          txt={
            currentUser?.displayName
              ? `Hello ${currentUser.displayName} 👋`
              : "Hello 👋"
          }
          fontSize="34px"
        />
        <AppText
          txt="What do you want to do ?"
          fontSize="16px"
          color="#8c8c8c"
        />
      </div>

      <div className="flex flex-col pt-10 justify-start items-start gap-3">
        <AppText txt="Your postings" fontSize="20px" />
        {data.length > 0 ? (
          data.map(item => (
            <>
              <ReservationBox key={item.id} data={data} post={item} />
              <AppText
                key={item.userId}
                txt={
                  data?.length
                    ? findCurrentPage(item.id) + 1 + "/" + data.length
                    : "1/7"
                }
                color="#cdcdcd"
                fontSize="12px"
              />
            </>
          ))
        ) : (
          <AppText txt="You have no postings" fontSize="16px" />
        )}
      </div>

      {/* <div className="flex flex-col pt-10 justify-start items-start gap-3">
        <AppText txt="Your reviews 🌟" fontSize="20px" />
        <div className="flex flex-col gap-5">
          <ReviewBox />
          <ReviewBox />
          <ReviewBox />
        </div>
      </div> */}
    </>
  );
}
