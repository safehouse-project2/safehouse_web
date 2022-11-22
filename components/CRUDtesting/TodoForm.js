import { TextField, Button,} from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import { collection, addDoc, serverTimestamp, updateDoc, doc} from 'firebase/firestore'
import { db } from '../../firebase'
import { CRUDContext } from '../../CRUDContext'
import {useAuth} from '../../AuthContext/AuthContext'

export default function TodoForm() {
    const user = useAuth()
    
    const inputAreaRef = useRef();
    // const [todo, setTodo] =useState({title:'', detail:''})

    const {showAlert, todo, setTodo} = useContext(CRUDContext)

    const onSubmit = async () => {
        if(todo?.hasOwnProperty('timestamp')){
             //update the todo
             const docRef = doc(db, "todos", todo.id)
             const todoUpdated = {...todo, timestamp: serverTimestamp()}
             updateDoc(docRef, todoUpdated)
             setTodo({title: '', detail: ''})
             showAlert('success', `Todo with id ${todo.id} updated successfully`)
        } else {
            // create new todo
            const collectionRef = collection(db, 'todos')
            const docRef = await addDoc(collectionRef, { ...todo, timestamp:
                serverTimestamp()})
                setTodo({
                    title:'',
                    detail:''
                })
                showAlert('success',`Todo with id ${docRef.id} added successfully`)
        }

    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (!inputAreaRef.current.contains(e.target)) {
                console.log('Outside input area')
                setTodo({ title: "", detail: "" })
            } else {
                console.log('Inside input area')
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    },[])

  return (
    <div ref={inputAreaRef}>
        {/* <pre>{JSON.stringify(todo, null, '\t')}</pre> */}
      <TextField fullWidth label="title" variant="outlined" margin='normal' 
      value={todo.title}
      onChange={(e)=> setTodo({...todo, title: e.target.value})}
      />
      <TextField fullWidth label="detail" variant="outlined" multiline maxRows={4} 
      value={todo.detail}
        onChange={(e)=> setTodo({...todo, detail: e.target.value})} 
      />
        <Button onClick={onSubmit} sx={{mt: 3}}> {todo.hasOwnProperty('timestamp')? "Update Todo": "Add Todo"}</Button>
    </div>
  )
}
