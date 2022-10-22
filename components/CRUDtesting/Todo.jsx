import React, { useContext } from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import moment from "moment";
//yarn add moment

import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CRUDContext } from '../../CRUDContext'
import{deleteDoc, doc} from 'firebase/firestore'
import { db } from '../../firebase'

export default function Todo({ id, timestamp, title, detail }) {
  const { showAlert, setTodo } = useContext(CRUDContext);

  async function deleteTodo(id, e) {
    e.preventDefault();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
    showAlert("error", `Todo with id ${id} deleted successfully`);
  }

  return (
    <ListItem
      onClick={() => setTodo({ id, title, detail, timestamp })}
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
      secondaryAction={
        <>
          <IconButton onClick={e => deleteTodo(id, e)}>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format("MMMM ddd, yyyy")}
      />
    </ListItem>
  );
}
