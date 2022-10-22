import React from 'react'
import { TextField } from '@mui/material'

export default function FormHouseDetail({ formData, setFormData }) {
  return (
   
    <div>
      <h1>House Detail</h1>
      <form>
        <label htmlFor="homeType">Home Type</label>
        <select
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
        <label htmlFor="description">Description</label>
       
        <TextField
          type="text"
          name="description"
          id="description"
          variant='outlined'
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </form>
    </div>
  )
}
