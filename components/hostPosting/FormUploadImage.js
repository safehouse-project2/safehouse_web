import React from 'react'
import AppText from '../D3Components/AppText/AppText'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function FormUploadImage() {
  function uploadToClient(){

  }

  function uploadToServer(){

  }
  return (
  <div className='flex flex-col gap-7 justify-center'>
    <div className='bg-[#E3E3E3] flex flex-col gap-4 px-4 py-4 rounded-lg'>
      <div className='flex gap-4 items-center'>
        <CloudUploadIcon />
        <AppText 
          txt = 'Choose from device'
          fontSize='20px'
        />
      </div>
      <div>
        <input type="file" name="myImage" onChange={uploadToClient} />
      </div>
    </div>


      <div className='bg-[#E3E3E3] flex flex-row gap-4 px-4 py-4 rounded-lg'> 
        <AddAPhotoIcon />
        <AppText 
          txt = 'Take photos now'
          fontSize='20px'
        />
      </div>

    </div>
  )
}
