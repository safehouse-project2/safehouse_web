import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import AppText from '../D3Components/AppText/AppText'

export default function FormUtilityDetail({ formData, setFormData }) {
  return (
    <div className='flex flex-col gap-10'>
      <AppText
        txt='Utility Details (1/2)'
        fontSize='24px'
        color='#f5f5f5'
      />

      <div className='text-[#f5f5f5] utilityForm flex flex-col'>
        <FormControl>

          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Do you provide with a Washer?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.washer || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, washer: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>


          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Do you provide with a Dryer ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.dryer || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, dryer: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>


          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Are pets allowed?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.petsAllowed || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, petsAllowed: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>


          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Is smoking allowed ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.smokingAllowed || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, smokingAllowed: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>

        </FormControl>
      </div>
    </div>
  )
}
