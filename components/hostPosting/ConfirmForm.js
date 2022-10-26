import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core/'
import AppText from '../D3Components/AppText/AppText'
// import { collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
// import { db } from '../../firebase'


export default function ConfirmForm({ formData }) {
  return (
    <>
      <div className='flex flex-col justify-center items-start'>
        <div className='flex gap-[17.9rem] pt-10'>
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
        <div className='flex gap-[14.2rem] pt-10'>
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
        <div className='flex gap-[19.5rem] pt-10'>
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
        <div className='flex gap-[15.5rem] pt-10'>
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
        <div className='flex gap-[18.2rem] pt-10'>
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

        <div className='flex gap-[21.2rem] pt-10'>
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

        <div className='flex gap-[17.7rem] pt-10'>
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

        <div className='flex gap-[19.6rem] pt-10'>
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

        <div className='flex gap-[15.1rem] pt-10'>
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

        <div className='flex max-w-[200px] mt-5 gap-[17rem] pt-10'>
          <AppText
            txt="Images"
            fontSize='20px'
            color='#F5F5F5'
          />
          <img src={formData.image} alt="No image uploaded" className='text-[#f5f5f5]' />
        </div>
      </div>
    </>
  )
}
