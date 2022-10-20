import { TextField, Button,} from '@mui/material'
import React, { useContext, useState } from 'react'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { db } from '../../firebase'
import { CRUDContext } from '../../pages/CRUDContext'

export default function TodoForm() {

    const [todo, setTodo] =useState({title:'', detail:''})

    const {showAlert} = useContext(CRUDContext)

    const onSubmit = async () => {
        const collectionRef = collection(db, 'todos')
        const docRef = await addDoc(collectionRef, { ...todo, timestamp:
            serverTimestamp()})
            setTodo({
                title:'',
                detail:''
            })
            showAlert('success',`Todo with id ${docRef.id} added successfully`)
    }

  return (
    <div>
        {/* <pre>{JSON.stringify(todo)}</pre> */}
      <TextField fullWidth label="title" variant="outlined" margin='normal' 
      value={todo.title}
      onChange={(e)=> setTodo({...todo, title: e.target.value})}
      />
      <TextField fullWidth label="detail" variant="outlined" multiline maxRows={4} 
      value={todo.detail}
        onChange={(e)=> setTodo({...todo, detail: e.target.value})} 
      />
        <Button onClick={onSubmit} sx={{mt: 3}}> Add todo</Button>
    </div>
  )
}
