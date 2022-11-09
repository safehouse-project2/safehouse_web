import React, { useRef, useState } from 'react'
import { useAuth } from '../../AuthContext/AuthContext'
import { Alert } from '@mui/material'
import { useRouter } from 'next/router'
import AppText from '../D3Components/AppText/AppText'
import Button from '../D3Components/Button/Button'
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const router = useRouter()
  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login, googleLogin } = useAuth()

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
    <div className="px-5 py-4">
      <div className='flex flex-col justify-center items-center my-[2.5rem] mx-auto rounded-lg gap-10 pb-10 bg-[#fff] max-w-[420px] dropShadow'>
        <div className='flex items-center justify-center m-auto'>
          <AppText
            txt='Login to your account'
            fontSize='1.7rem'
            padding='20px 0px 0px 0px'
          />
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <form onSubmit={handleSumbmit} className='flex flex-col justify-start items-start gap-2'>

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" ref={emailRef} required className='px-4 py-2 bg-[#f3f3f3] rounded-md mb-3' />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" ref={passwordRef} required className='px-4 py-2 bg-[#f3f3f3] rounded-md mb-3' />
          <div className='flex items-center justify-center m-auto'>
            <button className='text-[#4285F4] text-[1rem] hover:text-[#274f8f] transition-all' disabled={loading} type="submit">Login</button>
          </div>

        </form>

        {/* <Button onClick={loginWithGoogole} disabled={loading} type="submit"> continue with Google </Button> */}
        <Button
          txt='Login with Google'
          onBtnClick={loginWithGoogole}
          disabled={loading}
          type="submit"
          backgroundColor='#4285F4'
          borderRadius='5px'
          fontSize='1rem'
          startIcon={<GoogleIcon />}
          hoverColor='#274f8f'
          fontWeight='300'
        />
        <div className='flex flex-row items-center justify-center gap-3'>
          <AppText
            txt='Need an account?'
            fontSize='1rem'
          />
          {/* <Button href="/auth/signup">Sign Up</Button> */} {/* This is the original code */}
          <button className='text-[#4285F4] text-[1rem] hover:text-[#274f8f] transition-all' onClick={() => router.push('/auth/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
