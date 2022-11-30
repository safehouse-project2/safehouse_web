import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material'
import AppText from '../D3Components/AppText/AppText'
import { motion } from 'framer-motion'

export default function FormUtilityDetail2({ formData, setFormData }) {
  return (
    <div className='flex flex-col gap-10'>
      <div>
        <AppText
          txt='House Rules'
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
            <FormLabel id="demo-radio-buttons-group-label">Are Pets Allowed?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.petsAllowed || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, petsAllowed: e.target.value })}
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
            <FormLabel id="demo-radio-buttons-group-label">Is Smoking Allowed?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.smokingAllowed || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, smokingAllowed: e.target.value })}
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
            <FormLabel id="demo-radio-buttons-group-label">Are Children Allowed?</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={formData.childrenAllowed || "yes"}
              name="radio-buttons-group"
              onChange={(e) => setFormData({ ...formData, childrenAllowed: e.target.value })}
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
