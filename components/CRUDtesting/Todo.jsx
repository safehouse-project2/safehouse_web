import React from 'react'
import { ListItem, ListItemText } from '@mui/material'
import moment from 'moment'
//yarn add moment

export default function Todo({id, timestamp, title, detail}) {
  return (
   <ListItem
   sx={{mt:3, boxShadow: 3}}
   style={{ backgroundColor: '#FAFAFA'}}
   >

    <ListItemText
    primary={title}
    secondary={moment(timestamp).format("MMMM ddd, yyyy")}
    />
   </ListItem>
  )
}
