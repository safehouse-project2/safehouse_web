import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import AppText from '../D3Components/AppText/AppText'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function FormUploadImage({ formData, setFormData }) {
  // const [attachment, setAttachment] = useState()
  // const [file, setFile] = useState("")
  // const [imageList, setImageList] = useState([])
  // const imageListRef = ref(storage, "images/")
  // const onFileChange = (e) => {
  //   console.log(e.target.files[0]);
  //   setFile(e.target.files[0]);
  //   const {
  //     target: { files },
  //   } = e;
  //   const theFile = files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = (finishedEvent) => {
  //     const { currentTarget: { result } } = finishedEvent
  //     setAttachment(result);
  //   }
  //   reader.readAsDataURL(theFile)
  // }

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url])
  //       })
  //     })
  //   })
  // }, [])
  // const onClearAttachment = () => setAttachment(null)
  // const onUpload = () => {
  //   const imageRef = ref(storage, `images/${file.name + uuidv4()}`)
  //   uploadBytes(imageRef, file).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setFormData({ ...formData, image: url })
  //     })
  //   })
  // }
  return (
    <div className='flex flex-col gap-7 justify-center'>
      <div className='bg-[#E3E3E3] flex flex-col gap-4 px-4 py-4 rounded-lg'>
        <div className='flex gap-4 items-center'>
          <CloudUploadIcon />
          <AppText
            txt='Choose from device'
            fontSize='20px'
          />
        </div>
        <div>
          <input type="file" name="myImage" onChange={{/* onFileChange */ }} />
          <div>
            <img src={{/* attachment */ }} />
            <button onClick={{/* onUpload */ }}>File upload</button>
            <button onClick={{/* onClearAttachment */ }}>Clear</button>
          </div>
          <div>
            {/* {imageList.map((url) => {
              return <img src={url} />
            })} */}
          </div>
        </div>
      </div>


      <div className='bg-[#E3E3E3] flex flex-row gap-4 px-4 py-4 rounded-lg'>
        <AddAPhotoIcon />
        <AppText
          txt='Take photos now'
          fontSize='20px'
        />
      </div>

    </div>
  )
}
