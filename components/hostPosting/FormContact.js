import React from 'react'
import { TextField } from '@mui/material';

export default function FormContact({ formData, setFormData }) {
  return (
    <div>
    <div>
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
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div>
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
    </div>
  )
}
