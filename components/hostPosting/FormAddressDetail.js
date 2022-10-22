import React from 'react'
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material'



export default function FormAddressDetail({ formData, setFormData }) {
  return (
    <div>
      <form>
        <FormControl>
          <label htmlFor="addressLine1">Address Line 1</label>
          <TextField
            type="text"
            name="addressLine1"
            id="addressLine1"
            variant='outlined'
            value={formData.addressLine1}
            onChange={(e) =>
              setFormData({ ...formData, addressLine1: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <label htmlFor="addressLine2">Address Line 2</label>
          <TextField
            type="text" 
            name="addressLine2"
            id="addressLine2"
            variant='outlined'
            value={formData.addressLine2}
            onChange={(e) =>
              setFormData({ ...formData, addressLine2: e.target.value })
            }
          />
        </FormControl>
        <FormControl>
          <label htmlFor="city">City</label>
          <TextField
            type="text"
            name="city"
            id="city"
            variant='outlined'
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="province">Province</label>
          <select
            name="province"
            id="province"
            value={formData.province}
            onChange={(e) =>
              setFormData({ ...formData, province: e.target.value })
            }
          >
            <option value="British Columbia">British Columbia</option>
            <option value="Alberta">Alberta</option>
            <option value="Manitoba">Manitoba</option>
            <option value="New Brunswick">New Brunswick</option>
            <option value="Newfoundland and Labrador">
              Newfoundland and Labrador
            </option>
            <option value="Nova Scotia">Nova Scotia</option>
            <option value="Ontario">Ontario</option>
            <option value="Prince Edward Island">Prince Edward Island</option>
            <option value="Quebec">Quebec</option>
            <option value="Saskatchewan">Saskatchewan</option>
            <option value="Northwest Territories">Northwest Territories</option>
            <option value="Nunavut">Nunavut</option>
            <option value="Yukon">Yukon</option>
          </select>
        </FormControl>
        <FormControl>
          <label htmlFor="postalCode">Postal Code</label>
          <TextField
            type="text"
            name="postalCode"
            id="postalCode"
            variant='outlined'
            value={formData.postalCode}
            onChange={(e) =>
              setFormData({ ...formData, postalCode: e.target.value })
            }
          />
        </FormControl>
      </form>

   
    </div>
  )
}
