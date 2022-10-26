import * as React from 'react';
import Avatar from '@mui/joy/Avatar';

export default function AvatarIcon({
  img = "/Hayden.jpeg"
}) {
  return (
    <Avatar alt="Hayden" src={img} size="md" />
  )
}