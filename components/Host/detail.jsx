import ReservationBox from "../D3Components/ReservationBox/ReservationBox";
import AppText from "../D3Components/AppText/AppText";
import { useAuth } from "../../AuthContext/AuthContext";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import Button from '../D3Components/Button/Button'
import { auth, storage } from '../../firebase'
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import { updateProfile } from "firebase/auth";
import { v4 } from 'uuid'

export default function HostDetail({
  state = [{ userId: "" }, { userId: "" }],
}) {

<<<<<<< HEAD
  const [data, setData] = useState(state);
=======
>>>>>>> 2d175507dc11077c89bc59e08eae12dfa70caf41
  const { currentUser, logout } = useAuth();
 
  useEffect(() => {
    if (currentUser === null) {
      router.push('/auth/login')
    }
  }, [currentUser])

  const router = useRouter()
  const [data, setData] = useState(state);

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(currentUser?.photoURL);
  const [uploadOpen, setUploadOpen] = useState(false);

  const inputAreaRef = useRef();


   async function handleLogout() {
    await logout()
    router.push('/auth/login')
  }

  useEffect(() => {
    if (state.length > 0) {
      setData(state.filter(item => item.userId === currentUser?.uid));
    }
  }, [state]);
  const findCurrentPage = id => {
    if (data.length) {
      return data.findIndex(obj => obj.id === id);
    }
    return;
  };

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


  const imageListRef = ref(storage, `PImages/${currentUser?.uid}`)
  


  useEffect(() => {
    if(imageListRef !== null && imageListRef !== undefined){
    listAll(imageListRef).then((res) => {
      if (res.items.length > 0) {
        getDownloadURL(res.items[0]).then((url) => {
          setUrl(url)
          updateProfile(auth.currentUser, {
            photoURL: url
          })
        })
      }
    })
<<<<<<< HEAD
    setOpen(false)

    setCreateObjectURL(null)
  };

  function handleImage() {
    if (createObjectURL === null) {
      return currentUser.photoURL
    } else {
      return createObjectURL
    }
  }

  console.log("image", image)
  console.log("createObjectURL", createObjectURL)
=======
  }
  },[])


  function uploadToClient(e){
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setImageUpload(e.target.files[0]) 
      const i = e.target.files[0];
      setUrl(URL.createObjectURL(i));
      setOpen(false)
      setUploadOpen(true)
    }
  }

  const listImageRef = ref(storage, `PImages/${currentUser?.uid}`)

  const [imageUpload, setImageUpload] = useState(null)

  function uploadImagetoFirebase() {
    if (imageUpload === null) {
      return
    }
    const storageRef = ref(storage, `PImages/${currentUser?.uid}/${imageUpload.name + v4()}`)
    listAll(listImageRef).then((res) => { 
      if (res.items.length === 0) {
        uploadBytes(storageRef, imageUpload).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });
      } else {
        res.items.forEach((itemRef) => {
          deleteObject(itemRef)
            .then(() => {
              uploadBytes(storageRef, imageUpload).then((snapshot) => {
                console.log('Uploaded a blob or file!');
              })
            .catch((error) => {
              console.log(error, "failed to upload")
            }).catch((error) => {
              console.log(error, "failed to delete")
            }).catch((error) => {
              console.log(error, "failed to get")
            })
          })
        })
      }
    })
    setUploadOpen(false)
  }



>>>>>>> 2d175507dc11077c89bc59e08eae12dfa70caf41
  return (
    <>
      <div>
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
            onClick={clikeImage} style={{ borderRadius:"50%", overflow:"hidden", width: '200px', height: '200px' }}>
            <img width="100%" height="100%"  src={url} />
          </div>

          {uploadOpen && <Button
            txt="Upload image"
            onBtnClick={uploadImagetoFirebase}
            borderRadius="8px"
            margin="20px 0 0 0"
          />}
          {isHovering && !uploadOpen && <h2>Click image to update profile</h2>}

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
