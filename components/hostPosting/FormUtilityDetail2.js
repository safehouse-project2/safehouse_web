import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import AppText from '../D3Components/AppText/AppText'
import { motion } from 'framer-motion'

export default function FormUtilityDetail2({ formData, setFormData }) {
  return (
    <div className='flex flex-col gap-10'>
      <div>
        <AppText
          txt='Utility Details (2/2)'
          fontSize='24px'
          color='#f5f5f5'
        />
      </div>

      <div className='text-[#f5f5f5] utilityForm flex flex-col'>
        <FormControl>
          <motion.div className='flex flex-col gap-2 mb-6'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <FormLabel id="demo-radio-buttons-group-label">Can you provide WiFi ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.wifi || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, wifi: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </motion.div>

          <motion.div className='flex flex-col gap-2 mb-6'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <FormLabel id="demo-radio-buttons-group-label">Does your space has a Television ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.tv || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, tv: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </motion.div>

          <motion.div className='flex flex-col gap-2 mb-6'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FormLabel id="demo-radio-buttons-group-label">Does your space have Air Conditioning ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.airConditioning || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, airConditioning: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </motion.div>

          <motion.div className='flex flex-col gap-2 mb-6'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FormLabel id="demo-radio-buttons-group-label">Does your space have Heating ?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.heating || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, heating: e.target.value })}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes " />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </motion.div>
        </FormControl>

      </div>
    </div>
  )
}
