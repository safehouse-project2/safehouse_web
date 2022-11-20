import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core/'
import AppText from '../D3Components/AppText/AppText'
// import { collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
// import { db } from '../../firebase'


export default function ConfirmForm({ formData }) {
  console.log(formData)
  return (
    <>
      <div className='flex flex-col justify-start items-start w-[100%]'>
        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Home Type"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.homeType}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Home description"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.description}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Address"
            color='#F0E6D9'
            fontSize='18px'
          />
          <div className='text-[#f5f5f5] flex flex-col justify-center items-start'>
            <span>{formData.addressLine1}</span>
            <span>{formData.addressLine2}</span>
            <span>{formData.city}</span>
            <span>{formData.province}</span>
            <span>{formData.postalCode}</span>
          </div>
        </div>
        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Guests Allowed"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.guests}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Bedrooms"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.bedrooms}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Beds"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.beds}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Bathrooms"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.bathrooms}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Kitchen"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.kitchen}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Parking Spaces"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.parking}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>



        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Phone number"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.phoneNumber}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10 justify-between w-full'>
          <AppText
            txt="Email"
            color='#F0E6D9'
            fontSize='18px'
          />
          <AppText
            txt={formData.email}
            color='#F5F5F5'
            fontSize='18px'
          />
        </div>

        <div className='flex pt-10'>
          <AppText
            txt="Images"
            color='#F0E6D9'
            fontSize='18px'
          />
        </div>

        <div className="grid grid-cols-2 gap-2 imageConfirmDiv place-items-center m-auto mt-5 bg-[#333] p-4 rounded-lg">
          {formData.image && formData.image.map((link, idx) => (
            <img src={link} key={idx} alt="No image uploaded" className='text-[#f5f5f5] max-w-[200px] rounded-lg' />
          ))}
        </div>

      </div>
    </>
  )
}
