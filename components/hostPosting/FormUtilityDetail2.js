import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import AppText from '../D3Components/AppText/AppText'

export default function FormUtilityDetail2({ formData, setFormData }) {
  return (
    <div className='flex flex-col gap-10'>
      <AppText
        txt='Utility Details (2/2)'
        fontSize='24px'
        color='#f5f5f5'
      />

      <div className='text-[#f5f5f5] utilityForm flex flex-col'>
        <FormControl>

          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Does your place offer Wifi ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.wifi || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, wifi: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>

          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Does your place offer Television ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.tv || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, tv: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>

          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Does your place offer Air Conditioning ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.airConditioning || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, airConditioning: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </div>

          <div className='flex flex-col gap-2 mb-6'>
            <FormLabel id="demo-radio-buttons-group-label">Does your place offer Heating ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.heating || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, heating: e.target.value })}
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
