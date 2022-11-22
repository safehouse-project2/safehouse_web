import React from 'react'
import Login from '../../components/Authentication/Login'
import { AuthProvider } from '../../AuthContext/AuthContext'

export default function Home() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  )
}
