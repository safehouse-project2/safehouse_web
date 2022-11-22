import React from 'react'
import { TextField } from '@mui/material';
import { motion } from 'framer-motion'

export default function FormContact({ formData, setFormData }) {
  return (
    <div className='flex flex-col gap-4'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <label htmlFor="phoneNumber" className='text-[#f5f5f5] text-[18px]'>Phone Number</label>
        <br />
        <TextField
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            marginTop: '10px',
            minWidth: '100%',
          }}
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          variant='outlined'
          placeholder='Enter your phone number'
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <label htmlFor="email" className='text-[#f5f5f5] text-[18px]'>Email</label>
        <br />
        <TextField
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            marginTop: '10px',
            minWidth: '100%',
          }}
          type="email"
          name="email"
          id="email"
          variant='outlined'
          value={formData.email}
          placeholder='Enter your email'
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </motion.div>
    </div>
  )
}
