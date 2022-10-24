import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core/'
import AppText from '../D3Components/AppText/AppText'
// import { collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
// import { db } from '../../firebase'


export default function ConfirmForm({ formData }) {

  return (
    // <div className='text-[#f5f5f5]'>
    //   <AppText
    //     txt="Confirm your details"
    //     color='#f5f5f5'
    //     fontSize='24px'
    //   />

    //   <div>
    //     <div className='flex gap-[13.5rem] pt-10'>
    //       <AppText
    //         txt="Home Type"
    //         color='#F0E6D9'
    //         fontSize='18px'
    //       />
    //       <AppText
    //         txt={formData.homeType}
    //         color='#F5F5F5'
    //         fontSize='18px'
    //       />
    //     </div>
    //   </div>


    //   <List>
    //     <ListItem>
    //       <ListItemText primary="Home type" secondary={formData.homeType} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Home description" secondary={formData.description} />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemText primary="Address" secondary={
    //         <span>
    //           <span>{formData.addressLine1}</span>
    //           <span>{formData.addressLine2}</span>
    //           <span>{formData.city}</span>
    //           <span>{formData.province}</span>
    //           <span>{formData.postalCode}</span>
    //         </span>
    //       } />
    //     </ListItem>
    //     <ListItem>
    //       <ListItemText primary="Guests Allowed" secondary={formData.guests} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Bedrooms" secondary={formData.bedrooms} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Beds" secondary={formData.beds} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Bathrooms" secondary={formData.bathrooms} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Kitchen" secondary={formData.kitchen} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Parking spaces" secondary={formData.parking} />
    //     </ListItem>

    //     <hr />
    //     <h1>Utility</h1>
    //     <ListItem>
    //       <ListItemText primary="Washer provided?" secondary={formData.washer} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Dry Provided?" secondary={formData.dryer} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Pets Allowed?" secondary={formData.petsAllowed} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Smoking Allowed?" secondary={formData.smokingAllowed} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="wifi" secondary={formData.wifi} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="TV" secondary={formData.tv} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Air Conditioning" secondary={formData.airConditioning} />
    //     </ListItem>

    //     <ListItem>
    //       <ListItemText primary="Heating" secondary={formData.heating} />
    //     </ListItem>

    //   </List>
    // </div>
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
      </div>
    </>
  )
}
