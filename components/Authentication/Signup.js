import React, { useRef, useState } from 'react'
import { useAuth } from '../../AuthContext/AuthContext'
import { Alert } from '@mui/material'
import { useRouter } from 'next/router'
import AppText from '../D3Components/AppText/AppText'
import Button from '../D3Components/Button/Button'
import GoogleIcon from '@mui/icons-material/Google';


export default function Signup() {

  const router = useRouter()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { signup, googleLogin, currentUser } = useAuth()

  async function handleSumbmit(e) {
    e.preventDefault()
    console.log(firstNameRef.current.value)
    console.log(lastNameRef.current.value)
    console.log(emailRef.current.value)
    console.log(firstNameRef.current.value + " " + lastNameRef.current.value)

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(firstNameRef.current.value + " " + lastNameRef.current.value, emailRef.current.value, passwordRef.current.value)
      router.push('/auth/login')

    } catch (error) {
      console.log(error)
      setError("Failed to create an account")
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
    <div className='flex flex-col justify-center items-center my-[2.5rem] mx-auto rounded-lg gap-10 pb-10 bg-[#fff] max-w-[420px] dropShadow'>
      <div className='flex items-center justify-center m-auto'>
        <AppText
          txt='Create a new account'
          fontSize='1.7rem'
          padding='20px 0px 0px 0px'
        />
      </div>
      {currentUser && currentUser.email}
      {error && <Alert variant="danger">{error}</Alert>}
      <form onSubmit={handleSumbmit} className='flex flex-col justify-start items-start gap-2'>

        <label htmlFor="firstName">First Name</label>
        <input type="firstName" placeholder="Enter your firstName" ref={firstNameRef} required className="px-4 py-2 bg-[#f3f3f3] rounded-md mb-3" />

        <label htmlFor="lastName">Last Name</label>
        <input type="lastName" placeholder="Enter your lastName" ref={lastNameRef} required className="px-4 py-2 bg-[#f3f3f3] rounded-md mb-3" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter your email" ref={emailRef} required className="px-4 py-2 bg-[#f3f3f3] rounded-md mb-3" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter your password" ref={passwordRef} required className="px-4 py-2 bg-[#f3f3f3] rounded-md mb-3" />

        <label htmlFor="password">Confirm Password</label>
        <input type="password" placeholder="Re-enter your password" ref={passwordConfirmRef} required className="px-4 py-2 bg-[#f3f3f3] rounded-md mb-3" />
        <div className='flex items-center justify-center m-auto'>
          <button className='text-[#4285F4] text-[1rem] hover:text-[#274f8f] transition-all' disabled={loading} type="submit">Sign Up</button>
        </div>
      </form>

      {/* <Button onBtnClick={loginWithGoogle} disabled={loading} type="submit"> continue with Google </Button> */}
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

      {/* <div>Already have an account ?
        <Button href="/auth/login">Log in</Button>
      </div> */}

      <div className='flex flex-row items-center justify-center gap-3'>
        <AppText
          txt='Already have an account?'
          fontSize='1rem'
        />
        <button className='text-[#4285F4] text-[1rem] hover:text-[#274f8f] transition-all' onClick={() => router.push('/auth/login')}>Sign in</button>
      </div>
    </div>
  )
}
