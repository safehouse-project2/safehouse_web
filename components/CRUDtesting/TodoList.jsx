import { collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import Todo from './Todo'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const todosRef = collection(db, 'todos')
        const q = query(todosRef, orderBy("timestamp", "desc"))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setTodos(querySnapshot.docs.map(doc=> ({...doc.data(),
                id: doc.id, timestamp: doc.data().
                timestamp?.toDate().getTime()})))
        })
        return unsubscribe
    }, [])

  return (
    <div>
      {todos.map((todo) => 
      <Todo key={todo.id}
      id={todo.id}
      title={todo.title}
      detail={todo.detail}
      timestamp={todo.timestamp}
      />
      )}
    </div>
  )
}
