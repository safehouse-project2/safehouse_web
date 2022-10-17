//import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';


//Sofia Comps
import Title from '../components/Header';
import AppText from '../components/AppText';
import Input from '../components/Input';
import AppButton from '../components/Button';
import SignUp from '../components/SignUp';
import Icon from '../components/Icon';


export default function Home() {

  return (
    <div className="App">
      <h1>Safehouse</h1>
      <Title/>
      <AppText/>
      <Input/>
      <AppButton/>
      <SignUp/>
      <Icon/>
    </div>
  );
}