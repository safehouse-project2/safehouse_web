import React, { useRef, useState } from 'react'
import { useAuth } from '../../AuthContext/AuthContext'
import { Alert,Button } from '@mui/material'




export default function Signup() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { signup , currentUser} = useAuth()

  async function handleSumbmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      console.log(error)
      setError("Failed to create an account")
    }
  }

  return (
    <div className='flex flex-col justify-start items-center mt-10 gap-10 pb-10'>

      <h1>Sign up</h1>
      {currentUser && currentUser.email}
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSumbmit} className='flex flex-col justify-start items-center mt-10 gap-5 pb-5'>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" ref={emailRef} required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} required />

        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="Comfirm Passworkd" ref={passwordConfirmRef} required />

        <button  disabled={loading} type="submit">Sign Up</button>

      </form>
      <div>Already have an account ?
       
         <Button href="/auth/login"> Log in</Button>
         </div>
    </div>
  )
}
