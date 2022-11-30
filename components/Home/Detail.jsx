import Ammenities from "../D3Components/Listings/ammenities";
import Info from "../D3Components/Listings/info";
import Description from "../D3Components/Listings/description";
import Rules from "../D3Components/Listings/rules";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Swiper from "../D3Components/Swiper/Swiper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAuth } from "../../AuthContext/AuthContext";
import ContactModal from "../D3Components/ContactModal/ContactModal";

const Detail = ({ state }) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const id = router.query.id;
  const { currentUser } = useAuth();
  const [isAuth, setIsAuth] = useState(false);


  useEffect(() => {
    if (currentUser?.uid === state?.userId) {
      setIsAuth(true);
    }
  }, [useAuth(), currentUser]);

  const editHandler = () => {
    setIsEdit(true);
    router.push("/edit/" + id);
    return;
  };

  const buttonHandler = () => {
    setIsClicked(true);
  };

  const deleteHandler = () => {
    const docRef = doc(db, "homes", id);
    deleteDoc(docRef);
    window.confirm("Are you sure you want to delete this post?");
    router.push("/userhome");
  };

  return (
    <>
      <div>
        <div className="absolute z-[99] top-[10px] left-[10px] bg-[#ffffff] rounded-full p-[2px] cursor-pointer opacity-[0.5] backBtnCont">
          <ArrowBackIcon
            sx={{ color: "#272727", fontSize: "2.2rem" }}
            onClick={() => router.push("/userhome")}
          />
        </div>
        <div className="flex justify-center items-center max-w-[600px] m-auto">
          <Swiper imgSrc={state.image ? state.image : ""} />
        </div>
        {isAuth && (
          <div className="flex justify-around border-y-2 border-[#888] py-4 mb-4">
            <div>
              <EditIcon sx={{ color: "#4A4A4A" }} />
              <button className="text-[#808080]" onClick={editHandler}>
                Edit Listing
              </button>
            </div>
            <div>
              <DeleteIcon sx={{ color: "#4A4A4A" }} />
              <button className="text-[#808080]" onClick={deleteHandler}>
                Delete Listing
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col items-left justify-left ml-5">
          <Info state={state} />
          <Description state={state} />
          <Ammenities state={state} />
          <Rules state={state} />
        </div>
        <div className="flex mx-auto justify-center items-center my-10">
          <ContactModal
            ownerTxt={state?.userName || "Host"}
            phNum={state?.phoneNumber || "Phone number not provided"}
            emailTxt={state?.email || "Email not provided"}
          />
        </div>
      </div>
    </>
  );
};
export default Detail;
