import React, { useRef, useState } from 'react'
import { useAuth } from '../../AuthContext/AuthContext'
import { Alert , Button} from '@mui/material'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login , googleLogin} = useAuth()

  async function handleSumbmit(e) {
    e.preventDefault()
   
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      router.push('/')
    } catch (error) {
      console.log(error)
      setError("Failed to login")
    }
  }

  async function loginWithGoogole() {
    try {
      setError("")
      setLoading(true)
      await googleLogin()
      router.push('/')
    } catch (error) {
      console.log(error)
      setError("Failed to login with Google")
    }
  }

  return (
    <div className='flex flex-col justify-start items-center mt-10 gap-10 pb-10'>

      <h1>Log in</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSumbmit} className='flex flex-col justify-start items-center mt-10 gap-5 pb-5'>

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" ref={emailRef} required />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" ref={passwordRef} required />


        <button  disabled={loading} type="submit">Login</button>

      </form>

      <Button  onClick={loginWithGoogole} disabled={loading} type="submit"> continue with Google </Button>
      <div>Need an account ?
        <Button href="/auth/signup">Singup</Button>
          </div>
    </div>
  )
}
