import React, { useState } from 'react'
import { Alert, Button } from '@mui/material'
import { useAuth } from '../../AuthContext/AuthContext'
import { useRouter } from 'next/router'

export default function LogoutBtn() {

  const [error, setError] = useState('')

  const router = useRouter()
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    try {
      await logout()
      router.push('/auth/login')
    } catch (error) {
      console.log(error)
      setError('Failed to log out')

    }
  }

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      {currentUser ? <Button onClick={handleLogout}>Logout</Button> : <Button href="/auth/login">Log in</Button>}
    </div>
  )
}
