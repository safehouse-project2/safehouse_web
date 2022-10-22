import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
export default function FormUtilityDetail({formData, setFormData}) {
  return (
    <div>
      <h1>Utility Detail</h1>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Washer provided?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.washer || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, washer: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} 
          label="Yes " />
          <FormControlLabel value="no" control={<Radio />} 
          label="No" />
        </RadioGroup>

        <FormLabel id="demo-radio-buttons-group-label">Dryer Provided?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.dryer || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, dryer: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes " />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>


        <FormLabel id="demo-radio-buttons-group-label">pets petsAllowed?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.petsAllowed || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, petsAllowed: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes " />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>

        <FormLabel id="demo-radio-buttons-group-label">smoking petsAllowed?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.smokingAllowed || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, smokingAllowed: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes " />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
