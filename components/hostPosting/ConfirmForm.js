import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core/'
// import { collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
// import { db } from '../../firebase'


export default function ConfirmForm({ formData}) {

  return (
    <div>
      <h1>Confirm Form</h1>

      <List>
              <ListItem>
                <ListItemText primary="Home type" secondary={formData.homeType} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Home description" secondary={formData.description} />
              </ListItem>
            <ListItem>
                <ListItemText primary="Address" secondary={
                  <span>
                  <span>{formData.addressLine1}</span>
                  <span>{formData.addressLine2}</span>
                  <span>{formData.city}</span>
                  <span>{formData.province}</span>
                  <span>{formData.postalCode}</span>
                </span>
                }  />
              </ListItem>
              <ListItem>
                <ListItemText primary="Guests Allowed" secondary={formData.guests} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Bedrooms" secondary={formData.bedrooms} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Beds" secondary={formData.beds} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Bathrooms" secondary={formData.bathrooms} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Kitchen" secondary={formData.kitchen} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Parking spaces" secondary={formData.parking} />
              </ListItem>

              <hr/>
              <h1>Utility</h1>
              <ListItem>
                <ListItemText primary="Wahwer provided?" secondary={formData.washer} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Dry Provided?" secondary={formData.dryer} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Pets Allowed?" secondary={formData.petsAllowed} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Smoking Allowed?" secondary={formData.smokingAllowed} />
              </ListItem>

              <ListItem>
                <ListItemText primary="wifi" secondary={formData.wifi} />
              </ListItem>

              <ListItem>
                <ListItemText primary="TV" secondary={formData.tv} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Air Conditioning" secondary={formData.airConditioning} />
              </ListItem>

              <ListItem>
                <ListItemText primary="Heating" secondary={formData.heating} />
              </ListItem>

            </List>
    </div>
  )
}
