
import { FormControl } from '@mui/material'


import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";


export default function FormRoomDetails({ formData, setFormData }) {
    const [counter, setCounter] = useState(0);
    const [room, setRoom] = useState({
        guests: 0,
        bedrooms: 0,
        beds: 0,
        bathrooms: 0,
        kitchen: 0,
        parking: 0,
    });

    return (
        <>
            <FormControl>

                <label htmlFor="guests">Guests Allowed</label>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button 
                    onClick={(e)=> setFormData({...formData, guests: formData.guests>0?formData.guests - 1:0})}
                     >-</Button>
                    <Button>{formData.guests}</Button>
                    <Button onClick={(e)=> setFormData({...formData, guests: formData.guests +1})}
                    >+</Button>
                </ButtonGroup>
            </FormControl>
            <FormControl>
                <label htmlFor="bedrooms">Bedrooms</label>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button 
                    onClick={(e)=> setFormData({...formData, bedrooms: formData.bathrooms>0? formData.bedrooms - 1:0})}
                    >-</Button>
                    <Button >{formData.bedrooms}</Button>
                    <Button 
                     onClick={(e)=> setFormData({...formData, bedrooms: formData.bedrooms + 1})}
                    >+</Button>
                </ButtonGroup>
            </FormControl>
            <FormControl>
                <label htmlFor="beds">Beds</label>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button 
                     onClick={(e)=> setFormData({...formData, beds: formData.beds>0? formData.beds - 1:0})}
                    >-</Button>
                    <Button>{formData.beds}</Button>
                    <Button 
                     onClick={(e)=> setFormData({...formData, beds: formData.beds + 1})}
                    >+</Button>
                </ButtonGroup>
            </FormControl>

            <FormControl>
                <label htmlFor="bathrooms">Bathrooms</label>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button 
                     onClick={(e)=> setFormData({...formData, bathrooms: formData.bathrooms>0? formData.bathrooms - 1:0})}
                    >-</Button>
                    <Button>{formData.bathrooms}</Button>
                    <Button
                      onClick={(e)=> setFormData({...formData, bathrooms: formData.bathrooms + 1})}
                    >+</Button>
                </ButtonGroup>
            </FormControl>

            <FormControl>
                <label htmlFor="kitchen">Kitchen</label>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button 
                   onClick={(e)=> setFormData({...formData, kitchen: formData.kitchen>0?formData.kitchen - 1:0})}
                    >-</Button>
                    <Button>{formData.kitchen}</Button>
                    <Button onClick={(e)=> setFormData({...formData, kitchen: formData.kitchen + 1})}>+</Button>
                </ButtonGroup>
            </FormControl>

            <FormControl>
                <label htmlFor="parking">Parking</label>
                <ButtonGroup size="small" aria-label="small outlined button group">
                    <Button 
                     onClick={(e)=> setFormData({...formData, parking: formData.parking>0?formData.parking - 1:0})}
                    >-</Button>
                    <Button>{formData.parking}</Button>
                    <Button 
                     onClick={(e)=> setFormData({...formData, parking: formData.parking + 1})}
                    >+</Button>
                </ButtonGroup>
            </FormControl>

        </>
    );
}


