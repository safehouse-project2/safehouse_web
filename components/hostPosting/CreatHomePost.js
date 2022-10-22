import { Button } from '@mui/material';
import FormHouseDetail from './FormHouseDetail';
import FormAddressDetail from './FormAddressDetail';
import FormUploadImage from './FormUploadImage';
import FormUtilityDetail from './FormUtilityDetail';
import FormRoomDetails from './FormRoomDetails';
import FormUtilityDetail2 from './FormUtilityDetail2';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'

import React, { useState } from 'react'
import SubmitForm from './ConfirmForm';

function CreatHomePost() {
    const [formData, setFormData] = useState({

        homeType: '',
        description: '',

        addressLine1: '',
        addressLine2: '',
        city: '',
        province: '',
        postalCode: '',

        guests: 0,
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
        kitchen: 0,
        parking: 0,


        washer: 'yes',
        dryer: 'yes',
        petsAllowed: 'yes',
        smokingAllowed: 'yes',

        wifi: 'yes',
        tv: 'yes',
        airConditioning: 'yes',
        heating: 'yes',

    });



    const [page, setPage] = useState(0);
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <FormHouseDetail formData={formData} setFormData={setFormData} />;
            case 1:
                return <FormAddressDetail formData={formData} setFormData={setFormData} />;
            case 2:
                return <FormRoomDetails formData={formData} setFormData={setFormData} />;
            case 3:
                return <FormUtilityDetail formData={formData} setFormData={setFormData} />;
            case 4:
                return <FormUtilityDetail2 formData={formData} setFormData={setFormData} />;
            case 5:
                return <FormUploadImage formData={formData} setFormData={setFormData} />;
            case 6:
                return <SubmitForm formData={formData} setFormData={setFormData} />;
            default:
                return <FormHouseDetail formData={formData} setFormData={setFormData} />;
        }
    };



    function handleNext(e) {
        e.preventDefault();
        if (page === 0) {
            if (formData.homeType === '') {
                alert('Please select a home type');
            } else if (formData.description === '') {
                alert('Please enter a description');
            } else {
                setPage(page + 1);
            }
        }
        if (page === 1) {
            if (formData.addressLine1 === '') {
                alert('Please enter an address');
            } else if (formData.city === '') {
                alert('Please enter a city');
            } else if (formData.postalCode === '') {
                alert('Please enter a postal code');
            } else {
                setPage(page + 1);
            }

        }
        if (page === 2) {
            if (formData.guests === 0) {
                alert('Please enter the number of guests allowed');
            } else if (formData.bedrooms === 0) {
                alert('Please enter the number of bedrooms');
            } else if (formData.beds === 0) {
                alert('Please enter the number of beds');
            } else if (formData.bathrooms === 0) {
                alert('Please enter the number of bathrooms');
            } else {
                setPage(page + 1);
            }

        }
        if (page === 3 || page === 4 || page === 5) {
            setPage(page + 1);
        }

        if (page === 6) {
            console.log(formData);
            
        }


        //setPage(page + 1);
    }


    async function handleSubmit() {
        console.log(formData);
        const collectionRef = collection(db, 'homes')
        const docRef = await addDoc(collectionRef, {
            ...formData, timestamp:
                serverTimestamp()
        })
        alert('success', `Home with id ${docRef.id} added successfully`)
    }

    return (
        <div>
            <title>
                Hey there!
            </title>
            {conditionalComponent()}

            {page === 0 || page < 6 ? <Button onClick={handleNext}>Next </Button> : <Button onClick={handleSubmit}>sumbit</Button>}

            {page > 0 && <Button onClick={() => setPage(page - 1)}>Back</Button>}
        </div>
    );
}
export default CreatHomePost;