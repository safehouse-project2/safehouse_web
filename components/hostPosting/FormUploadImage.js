import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import AppText from '../D3Components/AppText/AppText';
import Button from '../D3Components/Button/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function FormUploadImage({ formData, setFormData }) {
  const [attachment, setAttachment] = useState()
  const [file, setFile] = useState("")

  const [imgsSrc, setImgsSrc] = useState([]);

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
    <div className='overflow-x-auto max-w-[350px]'>
      <p className='text-xl text-[#f5f5f5] pb-4'>Let's add some photos of your place.</p>
      <div className='overflow-x-auto'>
        <div className='r-box flex flex-row gap-4 bg-[#f5f5f5] px-4 py-4 justify-start items-center rounded-md'>
          <input type="file" name="myImage" onChange={onFileChange} />
          <DeleteIcon onClick={onClearAttachment} sx={{ color: '#272727' }} />
        </div>
        <div className='flex row mt-4 gap-5'>
          <Button
            onBtnClick={onClearAttachment}
            txt="Clear"
            backgroundColor='grey'
            borderRadius='5px'
            boxShadow='0'
            hoverColor=''
            endIcon={<ClearAllIcon />}
          />
        </div>

        <div className='flex flex-col gap-4 mt-4'>

          <div className='r-box flex flex-row gap-4 bg-[#f5f5f5] px-4 py-4 justify-start items-center rounded-md'>
            <AddAPhotoIcon />
            <AppText
              txt="Take photos now"
              fontSize='18px'
            />
          </div>
        </div>
        <div className='grid gap-2 grid-cols-3 drop-shadow-sm bg-[#212121] mt-4 rounded-lg imageUploadDiv place-items-center'>
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