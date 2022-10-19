import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
      <li><Link  href="/location"><a className="text-blue-500">Location</a></Link></li>
      <li>nav2</li>
      <li>nav3</li>
      <li>nav4</li>
      <li>nav5</li>
    </div>
  )
}
