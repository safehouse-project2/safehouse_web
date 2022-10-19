import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Listing from '../components/CRUD/listing'



export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>

      <h1 className="text-3xl">Home Page</h1>
      <Link href="/Dashboard">
        <a className="text-blue-500">Dashboard</a>
      </Link>

      <Link href="/host">
        <a className="text-blue-500">I am a host</a>
      </Link>

      <Link href="/evacuee">
        <a className="text-blue-500">I am an Evacuee</a>
      </Link>

      <Link href="/listings">
        <a className="text-blue-500">All Listings</a>
      </Link>

      <Listing/>

    </div>
  )
}
