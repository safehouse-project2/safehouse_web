import ReservationBox from "../D3Components/ReservationBox/ReservationBox";
import AppText from "../D3Components/AppText/AppText";
import { useAuth } from "../../AuthContext/AuthContext";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import Button from '../D3Components/Button/Button'
import Image from "next/image";
import { auth } from '../../firebase'
import { updateProfile } from "firebase/auth";
export default function HostDetail({

  state = [{ userId: "" }, { userId: "" }],
}) {

  const [data, setData] = useState(state);  
  const { currentUser, logout } = useAuth();
  console.log(currentUser)
  // console.log(currentUser.providerData[0].providerId);
  //google.com
  const [open, setOpen] = useState(false);
  const inputAreaRef = useRef();

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
  const router = useRouter()
  async function handleLogout() {
    await logout()
    router.push('/auth/login')
  }

  async function handleUpdate() {
    console.log(currentUser)
  }

  async function clikeImage() {
    console.log("click")
    setOpen(true)
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (!inputAreaRef.current.contains(e.target)) {
        setOpen(false);
      } else {
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  console.log(createObjectURL)
  async function uploadToClient(e) {
    e.preventDefault()
    console.log(e.target.files[0])
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  }

  const uploadToServer = async (event) => {
    await updateProfile(auth.currentUser, {
      photoURL: createObjectURL
    })
    setOpen(false)
  
    setCreateObjectURL(null)
  };

  function handleImage() {
    if(createObjectURL === null){
      return currentUser.photoURL
    }else{
      return createObjectURL
    }
  }
  
  console.log("image", image)
  console.log("createObjectURL", createObjectURL)
  return (
    <>
      <div>
        <Button
          txt="update account"
          onBtnClick={handleUpdate}
          borderRadius="8px"
          margin="20px 0 0 0"
        /> <br />
        <Button
          txt="logout"
          onBtnClick={handleLogout}
          borderRadius="8px"
          margin="20px 0 0 0"
        />


        <p>Hope you are having a great day!</p>

        <div ref={inputAreaRef}  >
          <div
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
            onClick={clikeImage} style={{ borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px' }}>
            <img width="100%" height="100%" src={currentUser.photoURL} />
          </div>
          {createObjectURL &&

            <Button
              txt="Upload image"
              onBtnClick={uploadToServer}
              borderRadius="8px"
              margin="20px 0 0 0"
            />}
          {isHovering && <h2>Click image to update profile</h2>}

          {open && <div className='r-box flex flex-row gap-4 bg-[#f5f5f5] px-4 py-4 justify-start items-center rounded-md'>
            <input type="file" name="myImage" onChange={uploadToClient} />
          </div>}
        </div>


      </div>
      <div className="flex flex-col gap-3">
        <AppText
          txt={
            currentUser?.displayName
              ? `Hello ${currentUser.displayName?.split(" ")[0]} 👋`
              : "Hello 👋"
          }
          fontSize="34px"
        />
        {/* <AppText
          txt="What do you want to do ?"
          fontSize="16px"
          color="#8c8c8c"
        /> */}
      </div>

      <div key={self.crypto.randomUUID()} className="flex flex-col pt-10 justify-start items-start gap-3">
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
