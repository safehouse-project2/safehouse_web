// import { Button } from '../D3Components/Button/Button';
// import { Button } from "@mui/material";
import Button from "../D3Components/Button/Button";
import FormHouseDetail from './FormHouseDetail';
import FormAddressDetail from './FormAddressDetail';
import FormUploadImage from './FormUploadImage';
import FormUtilityDetail from './FormUtilityDetail';
import FormRoomDetails from './FormRoomDetails';
import FormUtilityDetail2 from './FormUtilityDetail2';
import FormContact from './FormContact';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'
import { Snackbar, Alert } from '@mui/material'
import Success from './Success';
import React, { useEffect, useState } from 'react'
import SubmitForm from './ConfirmForm';
import { useRouter } from 'next/router'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PublishIcon from '@mui/icons-material/Publish';
import AppText from '../D3Components/AppText/AppText';
import { useAuth } from '../../AuthContext/AuthContext'

function CreatHomePost({ editState = [], isEdit = false, docId = "" }) {
    const { currentUser } = useAuth()

    const [open, setOpen] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");


    const titles = [
        "Tell us something about your place",
        "What's your address?",
        "How many people will you be hosting?",
        "Let's add some more details of your home",
        "Let's add some more details of your home",
        "Let's upload some photos of your place",
        "How would you like to be contacted?",
        "Review and Confirm"
    ]

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
    const [state, setState] = useState({ address: "," });
    const [formData, setFormData] = useState({

        homeType: 'House',
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

        image: [],

        userName: "",
        userEmail: "",
        userId: currentUser.uid,

        phoneNumber: "",
        email: "",

    });

    useEffect(() => {
        if (isEdit) {
            setFormData(editState)
        }
    }, [isEdit, editState])


    const [page, setPage] = useState(0);

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <FormHouseDetail formData={formData} setFormData={setFormData} title="aaa" />;
            case 1:
                return <FormAddressDetail formData={formData} setFormData={setFormData} state={state} setState={setState} />;
            case 2:
                return <FormRoomDetails formData={formData} setFormData={setFormData} />;
            case 3:
                return <FormUtilityDetail formData={formData} setFormData={setFormData} />;
            case 4:
                return <FormUtilityDetail2 formData={formData} setFormData={setFormData} />;
            case 5:
                return <FormUploadImage formData={formData} setFormData={setFormData} />;
            case 6:
                return <FormContact formData={formData} setFormData={setFormData} />
            case 7:
                return <SubmitForm formData={formData} setFormData={setFormData} />;
            case 8:
                return <Success />;
            default:
                return <FormHouseDetail formData={formData} setFormData={setFormData} />;
        }
    };


    function handleNext(e) {
        e.preventDefault();
        // if (page === 0) {
        //     if (formData.homeType === '') {
        //         showAlert('warning', 'Please select a home type');
        //     } else if (formData.description === '') {
        //         showAlert('warning', 'Please enter a description');
        //     } else {
        //         setPage(page + 1);
        //     }
        // }
        if (page === 1) {

            setFormData({ ...formData, addressLine1: state.address.split(',')[0] })

            // if (formData.addressLine1 === '') {
            //     showAlert('warning', 'Please enter an address');
            // } else if (formData.city === '') {
            //     showAlert('warning', 'Please enter a city');
            // } else if (formData.postalCode === '') {
            //     showAlert('warning', 'Please enter a postal code');
            // } else {
            //     setPage(page + 1);
            // }

        }
        // if (page === 2) {
        //     if (formData.guests === 0) {
        //         showAlert('warning', 'Please enter the number of guests allowed');
        //     } else if (formData.bedrooms === 0) {
        //         showAlert('warning', 'Please enter the number of bedrooms');
        //     } else if (formData.beds === 0) {
        //         showAlert('warning', 'Please enter the number of beds');
        //     } else if (formData.bathrooms === 0) {
        //         showAlert('warning', 'Please enter the number of bathrooms');
        //     } else {
        //         setPage(page + 1);
        //     }

        // }
        // if (page === 3 || page === 4 || page === 5) {
        //     setPage(page + 1);
        // }

        // if (page === 6) {
        //     console.log(formData);

        // }


        setPage(page + 1);
    }

    async function handleSubmit() {
        if (isEdit) {
            const collectionRef2 = doc(db, 'homes', docId)
            await updateDoc(collectionRef2, {
                ...formData,
                updatedAt: serverTimestamp()
            })
            router.push(`/home/${docId}`)
            return
        } else {
            const collectionRef = collection(db, 'homes')
            const docRef = await addDoc(collectionRef, {
                ...formData,
                userId: currentUser.uid ? currentUser.uid : "",
                userName: currentUser.displayName ? currentUser.displayName : "",
                userEmail: currentUser.email ? currentUser.email : "",
                timestamp:
                    serverTimestamp()
            })
            showAlert('success', `Home with id ${docRef.id} added successfully`)
            router.push(`/hosthome`)
            return
        }
    }



    return (
        <div className=''>
            <div className="flex flex-col gap-4 pb-10">
                <AppText
                    txt={titles[page]}
                    fontSize="34px"
                    color="#f5f5f5"
                />
            </div>
            {conditionalComponent()}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>

            <div className='flex justify-start items-center mt-10 gap-10 pb-10'>
                {/* {page > 0 && page < 7 && <Button onClick={() => setPage(page - 1)}>Back</Button>} */}
                {/* {page === 0 || page < 6 ? <Button onClick={handleNext}>Next</Button> : <Button onClick={handleSubmit}>sumbit</Button>} */}
                {page > 0 && page < 8 && <Button onBtnClick={() => setPage(page - 1)} txt="Back" startIcon={<ArrowBackIcon />} />}
                {page === 0 || page < 7 ? <Button onBtnClick={handleNext} txt="Next" endIcon={<ArrowForwardIcon />} /> : <Button onBtnClick={handleSubmit} txt="Submit" backgroundColor="#5581AA" endIcon={<PublishIcon />} hoverColor="#44698C" />}
            </div>
        </div>
    );
}
export default CreatHomePost;