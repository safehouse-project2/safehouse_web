import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Listing from '../components/CRUDtesting/listing'
import NavBar from '../components/Home/NavBar'
import { Button } from '@mui/material'
import{Box} from '@mui/system'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className='flex flex-row items-center justify-center min-h-screen py-2'>


        <Box sx={{ m: 2 }}>
          <Button variant="outlined" href="/login">
            Host
          </Button>
          <p>Apply to become a host</p>
        </Box>
        <Box sx={{ m: 2 }}>
  
          <Button variant="outlined" href="/login">
            Evacuee
          </Button>
          <p>Apply to be an evacuee</p>
        </Box>
      </div>
    </>
  )
}
