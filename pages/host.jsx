

import React from 'react'
import PostHome from './postHome'
import { Container, Button } from '@mui/material'
import NavBar from '../components/Home/navBar'

export default function host() {
  return (
    <>
      <NavBar />
      <Container>
        <p>This is host page, if this host already posted their PostHome
          then it will be shown here.   </p>
        <p>
          Authentication is not done yet, of course, only logged in host
          can come to this page to make a post.
        </p>
        <Button variant="outlined" href="/PostHome">Post my home</Button>
      </Container>
    </>
  )
}
