import React , {useState}from 'react'
import NavBar from '../components/Home/NavBar'
import CreatePost from '../components/CRUDtesting/TodoList'
import { Container, Snackbar, Alert } from '@mui/material'
import TodoForm from '../components/CRUDtesting/TodoForm'
import { CRUDContext } from '../CRUDContext'


export default function Dashboard() {

  const [open, setOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [todo, setTodo] =useState({title:'', detail:''})

  const showAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setOpen(true);
  }

  const handleClose = (e, reason)=>{
    if(reason === 'clickaway'){
      return;
    }
    setOpen(false);
  }

  return (
    <CRUDContext.Provider value={{showAlert, todo, setTodo}}>
    <Container maxWidth="sm">
      <TodoForm/>
      <Snackbar 
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <CreatePost />
    </Container>
    </CRUDContext.Provider>

  )
}
