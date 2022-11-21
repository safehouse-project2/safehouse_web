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
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function HostDetail({
  state = [{ userId: "" }, { userId: "" }],
}) {

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

  const imageListRef = ref(storage, `PImages/${currentUser?.uid}`)



  useEffect(() => {
    if (imageListRef !== null && imageListRef !== undefined) {
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
    }
  }, [])


  function uploadToClient(e) {
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

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="flex w-[100%]">
        <div ref={inputAreaRef} className="w-full flex">
          <div className="absolute z-99 bg-blue-300 p-2 bottom-[100] right-[0] mt-2 mr-2 rounded-lg drop-shadow-lg">
            <EditIcon
              onClick={() => setOpen(true)}
            />
          </div>
          <div
            className="w-full"
          // onClick={clickImage}
          >
            <img className="w-full h-full" src={url} />
          </div>

          {uploadOpen &&
            // <Button
            //   txt="Upload image"
            //   onBtnClick={uploadImagetoFirebase}
            //   borderRadius="8px"
            //   margin="20px 0 0 0"
            // />
            alert("Image Uploaded", uploadImagetoFirebase())
          }
          {open &&
            <div className='r-box flex flex-row gap-4 bg-[#f5f5f5] px-4 py-4 justify-start items-center rounded-md'>
              <input type="file" name="myImage" onChange={uploadToClient} />
            </div>
          }
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-5">
        <AppText
          txt={
            currentUser?.displayName
              ? `Hello, ${currentUser.displayName?.split(" ")[0]} 👋`
              : "Hello 👋"
          }
          fontSize="34px"
        />
        <p className="text-lg">Hope you are having a great day!</p>
        <p className="text-gray-500">Not {currentUser?.displayName?.split(" ")[0] || "Hello"} ?<span className="text-blue-600" onClick={handleLogout}> Sign Out</span> </p>
        {/* <AppText
          txt="What do you want to do ?"
          fontSize="16px"
          color="#8c8c8c"
        /> */}
      </div>

      <div key={self.crypto.randomUUID()} className="flex flex-col justify-center items-start gap-2 px-5 pb-[50px]">
        <div className="flex flex-row items-center w-full justify-between">
          <AppText txt="Your postings" fontSize="18px" fontWeight="500" />
          <Button txt="Add new" fontSize="16px" borderRadius="4px" endIcon={<AddBoxIcon />} onBtnClick={() => router.push('/PostHome')} />
        </div>
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
    </div >
  );

}
