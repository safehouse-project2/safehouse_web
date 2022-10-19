import React from 'react'
import NavBar from '../components/Home/NavBar'
import CreatePost from '../components/CRUD/createPost'

export default function Dashboard() {
  return (
    <div>
      <NavBar/>
        <CreatePost/>
    </div>
  )
}
