

import CreatHomePost from "../components/hostPosting/CreatHomePost";
import { Container } from '@mui/material'
import Script from "next/script";

import React from 'react'

export default function PostHome() {
  return (
    <><Script
      strategy="beforeInteractive"
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&libraries=places`}
    ></Script>
      <Container>
        <CreatHomePost />
      </Container></>
  )
}

