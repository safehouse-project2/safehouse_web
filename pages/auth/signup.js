
import React from 'react'
import Signup from '../../components/Authentication/Signup'
import { AuthProvider } from '../../AuthContext/AuthContext'

export default function Home() {
    
  return (
    <AuthProvider>
      <Signup />
    </AuthProvider>
  )
}
