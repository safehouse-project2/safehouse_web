import React from 'react'
import { TextField } from '@mui/material'
import { LeftContainer } from '../../styles/styledComps'

export default function FormHouseDetail({ formData, setFormData }) {
  return (
    <div className=''>
      <form>
        <div>
          <label htmlFor="homeType" className='text-[#f5f5f5] text-[18px]'>What kind of place will you be hosting ?</label>
          <select className='text-[#272727] px-[15px] py-[10px] rounded-md mt-3'
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

        <br />

        <div>
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
        </div>
      </form>
    </div>
  )
}
