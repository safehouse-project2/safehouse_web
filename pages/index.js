//import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';


//Sofia Comps
import index from '../components/Header/Header';
import index from '../components/AppText/AppText';
import index from '../components/Input/Input';
import index from '../components/Button/Button';
import index from '../components/SignUp/SignUp';
import index from '../components/Icon/Iocn';


export default function Home() {

  return (
    <div className="App">
      <h1>Safehouse</h1>
      <Title/>
      <AppText/>
      <Input/>
      <AppButton/>
      <SignUp/>
      {/* <Icon/> */}
    </div>
  );
}