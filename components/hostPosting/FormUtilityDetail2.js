import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
export default function FormUtilityDetail2({formData, setFormData}) {
  return (
    <div>
     <h1>More Utility Detail</h1>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">wifi</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.wifi || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, wifi: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes " />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>


        <FormLabel id="demo-radio-buttons-group-label">TV</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.TV || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, tv: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes " />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>

        <FormLabel id="demo-radio-buttons-group-label">Air Conditioning?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.airConditioning || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, airConditioning: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes " />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>

        <FormLabel id="demo-radio-buttons-group-label">Heating?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={formData.heating || "yes"}
          name="radio-buttons-group"
          onChange={(e) => setFormData({ ...formData, heating: e.target.value })}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes " />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        </FormControl>

    </div>
  )
}
