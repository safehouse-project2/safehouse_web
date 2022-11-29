import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import AppText from '../D3Components/AppText/AppText'
import { motion } from 'framer-motion'

export default function FormUtilityDetail({ formData, setFormData }) {
  return (
    <div className='flex flex-col gap-10'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <AppText
          txt='More Home Details'
          fontSize='24px'
          color='#f5f5f5'
        />
      </motion.div>

      <div className='text-[#f5f5f5] utilityForm flex flex-col'>
        <FormControl className='utilityDetails'>
          <motion.div className='flex flex-col gap-2 mb-6'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <FormLabel id="demo-radio-buttons-group-label">Do you Provide Wifi?</FormLabel>
            <RadioGroup
              className='utilityDetails'
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
            <FormLabel id="demo-radio-buttons-group-label">Do you Have Space for People to Set up Cars/ RVs?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.space || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, space: e.target.value })}
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
            <FormLabel id="demo-radio-buttons-group-label">Do you Provide Food?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.food || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, food: e.target.value })}
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
            <FormLabel id="demo-radio-buttons-group-label">Is your Home Wheelchair Accessible?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.accessible || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, accessible: e.target.value })}
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
