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
import AddBoxIcon from '@mui/icons-material/AddBox';
import UploadImagePopover from "../D3Components/UploadImagePopover/UploadImagePopover";
import { motion } from 'framer-motion'

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

  const [open, setOpen] = useState(true)

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
        setUploadOpen(false);
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
          <div className="flex justify-center mt-6 w-full">
            {/* <div className="absolute z-99 bg-blue-300 p-2 bottom-[100] right-[0] mt-2 mr-2 rounded-lg drop-shadow-lg">
              <EditIcon
                onClick={() => setOpen(true)}
              />
            </div> */}
            <div className="flex flex-col justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0 }}
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  width: "200px",
                  height: "200px",
                }}
              >
                {/* <img className="w-[200px] h-[200px] rounded-full" src={url} alt="profile picture" /> */}
              </motion.div>
              <motion.div className="mt-[-20px] cursor-pointer"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                 { open && <UploadImagePopover
                  onImageChange={uploadToClient}
                />}
              </motion.div>
            </div>
          </div>

          {uploadOpen &&
            alert("Image Uploaded", uploadImagetoFirebase())
          }

        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AppText
            txt={
              currentUser?.displayName
                ? `Hello, ${currentUser.displayName?.split(" ")[0]} 👋`
                : "Hello 👋"
            }
            fontSize="34px"
          />
        </motion.div>
        <motion.p className="text-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >Hope you are having a great day!

        </motion.p>
        <motion.p className="text-gray-500"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >Not {currentUser?.displayName?.split(" ")[0] || "Hello"} ?<span className="text-blue-500 cursor-pointer" onClick={handleLogout}> Sign Out</span> </motion.p>
      </div>

      <div key={self.crypto.randomUUID()} className="flex flex-col justify-center items-start gap-2 px-5 pb-[50px]">
        <div className="flex flex-row items-center w-full justify-between pb-3 gap-5 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AppText txt="Your postings" fontSize="18px" fontWeight="500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button txt="Add new" fontSize="16px" borderRadius="4px" endIcon={<AddBoxIcon />} onBtnClick={() => router.push('/PostHome')} />
          </motion.div>
        </div>
        {

          data.length > 0 ? (
            data.map(item => (
              // show loading screen first for 2 seconds then show the data
              <div className="flex flex-col max-w-[400px] pb-4">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <ReservationBox key={item.id} data={data} post={item} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
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
                </motion.div>
              </div>
            ))
          ) : (
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            >
            <AppText txt="You have no postings" fontSize="16px" />
            </motion.div>
          )}
      </div>
    </div >
  );

}
