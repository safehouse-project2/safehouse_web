import { FormControl } from '@mui/material'
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { CounterBtn, CounterBtnVal } from '../../styles/styledComps';
import { blue, yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    const theme = createTheme({
        palette: {
            primary: {
                main: blue[500],
                contrastText: yellow[500],
            },
        },
    });
    console.log("formData", formData);

    return (
        <div className='flex flex-col text-[#f5f5f5] gap-10 justify-start items-start text-xl'>
            <FormControl>
                <div className='flex items-center justify-center gap-[120px]'>
                    <label htmlFor="guests">Guests Allowed</label>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, guests: Number(formData.guests) > 0 ? Number(formData.guests) - 1 : 0 })}
                        >
                            -
                        </CounterBtn>
                        <CounterBtnVal
                            variant='contained'
                            color='inherit'
                            text='black'
                        >{formData.guests}</CounterBtnVal>
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, guests: Number(formData.guests) + 1 })}
                        >+</CounterBtn>
                    </ButtonGroup>
                </div>
            </FormControl>


            <FormControl>
                <div className='flex items-center justify-center gap-[168px]'>
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, bedrooms: Number(formData.bedrooms) > 0 ? Number(formData.bedrooms) - 1 : 0 })}
                        >-</CounterBtn>
                        <CounterBtnVal
                            variant='contained'
                            color='inherit'
                            text='black'
                        >
                            {formData.bedrooms}
                        </CounterBtnVal>
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, bedrooms: Number(formData.bedrooms) + 1 })}
                        >+</CounterBtn>
                    </ButtonGroup>
                </div>
            </FormControl>


            <FormControl>
                <div className='flex items-center justify-center gap-[220px]'>
                    <label htmlFor="beds">Beds</label>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, beds: Number(formData.beds) > 0 ? Number(formData.beds) - 1 : 0 })}
                        >-</CounterBtn>
                        <CounterBtnVal
                            variant='contained'
                            color='inherit'
                            text='black' >{formData.beds}</CounterBtnVal>
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, beds: Number(formData.beds) + 1 })}
                        >+</CounterBtn>
                    </ButtonGroup>
                </div>
            </FormControl>


            <FormControl>
                <div className='flex items-center justify-center gap-[157px]'>
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, bathrooms: Number(formData.bathrooms) > 0 ? Number(formData.bathrooms) - 1 : 0 })}
                        >-</CounterBtn>
                        <CounterBtnVal
                            variant='contained'
                            color='inherit'
                            text='black' >{formData.bathrooms}</CounterBtnVal>
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, bathrooms: Number(formData.bathrooms) + 1 })}
                        >+</CounterBtn>
                    </ButtonGroup>
                </div>
            </FormControl>


            <FormControl>
                <div className='flex items-center justify-center gap-[190px]'>
                    <label htmlFor="kitchen">Kitchen</label>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, kitchen: Number(formData.kitchen) > 0 ? Number(formData.kitchen) - 1 : 0 })}
                        >-</CounterBtn>
                        <CounterBtnVal
                            variant='contained'
                            color='inherit'
                            text='black' >{formData.kitchen}</CounterBtnVal>
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, kitchen: Number(formData.kitchen) + 1 })}>+</CounterBtn>
                    </ButtonGroup>
                </div>
            </FormControl>


            <FormControl>
                <div className='flex items-center justify-center gap-[190px]'>
                    <label htmlFor="parking">Parking</label>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, parking: Number(formData.parking) > 0 ? Number(formData.parking) - 1 : 0 })}
                        >-</CounterBtn>
                        <CounterBtnVal
                            variant='contained'
                            color='inherit'
                            text='black' >{formData.parking}</CounterBtnVal>
                        <CounterBtn
                            variant='contained'
                            color='inherit'
                            text='black'
                            onClick={(e) => setFormData({ ...formData, parking: Number(formData.parking) + 1 })}
                        >+</CounterBtn>
                    </ButtonGroup>
                </div>
            </FormControl>


        </div>
    );
}


// there should be a P tag or sth that should be used to display the value of the counter instead of the button