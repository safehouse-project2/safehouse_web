import React from 'react'
import { TextField } from '@mui/material'
import { LeftContainer } from '../../styles/styledComps'
import { motion } from 'framer-motion'

export default function FormHouseDetail({ formData, setFormData }) {

  return (
    <div className=''>
      <form>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className='flex flex-col justify-start items-start pb-5'>
          <label htmlFor="homeType" className='text-[#f5f5f5] text-[18px]'>What kind of place will you be hosting ?</label>
          <div className='bg-[#E9E9ED] py-3 px-3 mt-3 rounded-md'>
            <select className='text-[#272727]'
              name="homeType"
              id="homeType"
              value={formData.homeType}
              onChange={(e) => setFormData({ ...formData, homeType: e.target.value })}
            >
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </motion.div>

        <br />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <label htmlFor="description" className='text-[#f5f5f5] text-[18px]'>Description</label>
          <br />
          <TextField
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              marginTop: '10px',
              minWidth: '100%',
            }}
            type="text"
            name="description"
            id="description"
            variant='outlined'
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </motion.div>
      </form>
    </div>
  )
}