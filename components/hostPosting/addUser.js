import React from 'react'
import { useAuth } from '../../AuthContext/AuthContext'
export default function AddUser({ addUser }) {
    const { currentUser } = useAuth()
    addUser(currentUser)
    return (
        <div>
            addUser
        </div>
    )
}