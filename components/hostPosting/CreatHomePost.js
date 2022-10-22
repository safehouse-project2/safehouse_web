import { Button } from '@mui/material';
import FormHouseDetail from './FormHouseDetail';
import FormAddressDetail from './FormAddressDetail';
import FormUploadImage from './FormUploadImage';
import FormUtilityDetail from './FormUtilityDetail';
import FormRoomDetails from './FormRoomDetails';
import FormUtilityDetail2 from './FormUtilityDetail2';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { Snackbar, Alert } from '@mui/material'
import Success from './Success';
import React, { useState } from 'react'
import SubmitForm from './ConfirmForm';
import { useRouter } from 'next/router'


function CreatHomePost() {

    const [open, setOpen] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");

    const showAlert = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setOpen(true);
    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const router = useRouter()
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
            case 7:
                return <Success />;
            default:
                return <FormHouseDetail formData={formData} setFormData={setFormData} />;
        }
    };



    function handleNext(e) {
        e.preventDefault();
        if (page === 0) {
            if (formData.homeType === '') {
                showAlert('warning', 'Please select a home type');
            } else if (formData.description === '') {
                showAlert('warning', 'Please enter a description');
            } else {
                setPage(page + 1);
            }
        }
        if (page === 1) {
            if (formData.addressLine1 === '') {
                showAlert('warning', 'Please enter an address');
            } else if (formData.city === '') {
                showAlert('warning', 'Please enter a city');
            } else if (formData.postalCode === '') {
                showAlert('warning', 'Please enter a postal code');
            } else {
                setPage(page + 1);
            }

        }
        if (page === 2) {
            if (formData.guests === 0) {
                showAlert('warning', 'Please enter the number of guests allowed');
            } else if (formData.bedrooms === 0) {
                showAlert('warning', 'Please enter the number of bedrooms');
            } else if (formData.beds === 0) {
                showAlert('warning', 'Please enter the number of beds');
            } else if (formData.bathrooms === 0) {
                showAlert('warning', 'Please enter the number of bathrooms');
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


        // setPage(page + 1);
    }


    async function handleSubmit() {
        console.log(formData);
        const collectionRef = collection(db, 'homes')
        const docRef = await addDoc(collectionRef, {
            ...formData, timestamp:
                serverTimestamp()
        })
        showAlert('success', `Home with id ${docRef.id} added successfully`)
        router.push('/host')
    }




    return (
        <div>
            <title>
                Hey there!
            </title>
            {conditionalComponent()}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>

            {page === 0 || page < 6 ? <Button onClick={handleNext}>Next </Button> : <Button onClick={handleSubmit}>sumbit</Button>}

            {page > 0 && page < 7 && <Button onClick={() => setPage(page - 1)}>Back</Button>}
        </div>
    );
}
export default CreatHomePost;