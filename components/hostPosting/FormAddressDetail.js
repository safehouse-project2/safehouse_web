import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Script from "next/script";
import { TextField } from '@mui/material';
import { motion } from 'framer-motion'


export default function FormAddressDetail({ formData = { addressLine1: "", addressLine2: "", city: "", province: "" }, setFormData, state, setState }) {

  const handleChange = address => {
    setState({ address });
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => setFormData({ ...formData, lat: latLng.lat, lng: latLng.lng }))
      .catch(error => console.error("Error", error));
  };

  return (
    <div>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places`}
      ></Script>
      <form className='flex flex-col justify-center'>
        <FormControl>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <label htmlFor="addressLine1" className='text-[#f5f5f5] text-[18px]'>Address Line 1</label>
            <PlacesAutocomplete
              value={state?.address && state.address.split(",")[0]}
              onChange={address => setState({ address })}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div className='pb-6'>
                  <TextField
                    sx={{
                      backgroundColor: '#f5f5f5',
                      borderRadius: '10px',
                      marginTop: '10px',
                      minWidth: '100%',
                    }}
                    {...getInputProps({
                    })}
                    type="text"
                    name="addressLine1"
                    id="addressLine1"
                    variant='outlined'
                    value={state?.address && state.address.split(",")[0] || formData.addressLine1}
                    placeholder='Address Line 1'
                    required
                  />

                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      // console.log(suggestion);
                      // setHome({ ...home, address: suggestion.description });
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          key={suggestion.description}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span
                            onClick={e => {
                              setState({ address: e.currentTarget.innerHTML })
                            }
                            }
                          >
                            {suggestion.description}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
              }
            </PlacesAutocomplete >
          </motion.div>
        </FormControl>

        <FormControl>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <label htmlFor="addressLine2" className='text-[#f5f5f5] text-[18px]'>Address Line 2</label>
            <div className='pb-6'>
              <TextField
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  marginTop: '10px',
                  minWidth: '100%',
                }}
                type="text"
                name="addressLine2"
                id="addressLine2"
                placeholder='Optional'
                variant='outlined'
                value={formData.addressLine2}
                onChange={(e) =>
                  setFormData({ ...formData, addressLine2: e.target.value })
                }
              />
            </div>
          </motion.div>
        </FormControl>

        <FormControl>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <label htmlFor="city" className='text-[#f5f5f5] text-[18px]'>City</label>
            <div className='pb-6'>
              <TextField
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  marginTop: '10px',
                  minWidth: '100%',
                }}
                type="text"
                name="city"
                id="city"
                variant='outlined'
                placeholder='City'
                required={true}
                value={state?.address && state.address.split(",")[1] || formData.city}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value })
                }}
              />
            </div>
          </motion.div>
        </FormControl>

        <FormControl>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <label htmlFor="province" className='text-[#f5f5f5] text-[18px]'>Province</label>
            <div className='pb-6'>
              <TextField
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  marginTop: '10px',
                  minWidth: '100%',
                }}
                type="text"
                name="province"
                id="province"
                variant='outlined'
                placeholder='Province'
                required
                value={state?.address && state.address.split(",")[2] || formData.province}
                onChange={(e) =>
                  setFormData({ ...formData, province: e.target.value })
                }
              />
            </div>
          </motion.div>
        </FormControl>
        {/* <FormControl>
          <label htmlFor="province">Province</label>
          <select
            name="province"
            id="province"
            value={formData.province}
            onChange={(e) =>
              setFormData({ ...formData, province: e.target.value })
            }
          >
            <option value="British Columbia">British Columbia</option>
            <option value="Alberta">Alberta</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">
              Newfoundland and Labrador
            </option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Northwest Territories">Northwest Territories</option>
            <option value="Nunavut">Nunavut</option>
            <option value="Yukon">Yukon</option>
          </select>
        </FormControl> */}
        {/* <FormControl>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <label htmlFor="postalCode" className='text-[#f5f5f5] text-[18px]'>Postal Code</label>
            <div className='pb-6'>
              <TextField
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  marginTop: '10px',
                  minWidth: '100%',
                }}
                type="text"
                name="postalCode"
                id="postalCode"
                variant='outlined'
                placeholder='Postal Code'
                required
                value={formData.postalCode}
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value })
                }

              />
            </div>
          </motion.div>
        </FormControl> */}


      </form >


    </div >
  )
}
