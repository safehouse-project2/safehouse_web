import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import AppText from '../D3Components/AppText/AppText';
import Button from '../D3Components/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { motion } from 'framer-motion'

export default function FormUploadImage({ formData, setFormData, imgsSrc, setImgsSrc }) {
  const [attachment, setAttachment] = useState()
  const [file, setFile] = useState("")

  useEffect(() => {
    if (formData.images) {
      setImgsSrc(formData.images)
    }
  }, [])

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    const {
      target: { files },
    } = e;
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.onload = (finishedEvent) => {
        setImgsSrc((imgs) => [...imgs, reader.result]);
        const { currentTarget: { result } } = finishedEvent
        setAttachment(result);
      };
      reader.readAsDataURL(file)
      const imageRef = ref(storage, `images/${file.name + uuidv4()}`)
      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          if (formData.image[0] === "") {
            setFormData({ ...formData, image: [url] })
            return
          } else if (formData.image[0] !== "") {
            setFormData({ ...formData, image: [...formData.image, url] })
            return
          }
        })
      })
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };



  const onClearAttachment = () => {
    setImgsSrc([])
    return setFormData({ ...formData, image: [] })
  }


  return (
    <div className='flex flex-col'>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className='text-xl text-[#f5f5f5] pb-4'>Choose the photos from your device.</motion.p>
      <div className='flex flex-col'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className='flex bg-[#f5f5f5] px-4 py-4 justify-start items-center rounded-md w-full'>
          <input type="file" name="myImage" onChange={onFileChange} className="w-[280px]" />
          <DeleteIcon onClick={onClearAttachment} sx={{ color: '#272727' }} />
        </motion.div>
        {/* <motion.div className='flex row mt-4 gap-5'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button
            onBtnClick={onClearAttachment}
            txt="Clear"
            backgroundColor='grey'
            borderRadius='5px'
            boxShadow='0'
            hoverColor=''
            endIcon={<ClearAllIcon />}
          />
        </motion.div> */}

        <div className='grid gap-2 grid-cols-3 drop-shadow-sm bg-[#212121] mt-4 rounded-lg imageUploadDiv place-items-center px-3 py-5'>
          {imgsSrc?.map((link) => (
            <div key={self.crypto.randomUUID()} className='px-3 py-5'>
              <img src={link} className='max-w-[200px] uploadImageImg rounded-md' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}