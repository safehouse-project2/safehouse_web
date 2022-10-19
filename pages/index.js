import Dropdown from "../components/Dropdown/Dropdown";
// import HotelIcon from '@mui/icons-material/Hotel';
// import ForestIcon from '@mui/icons-material/Forest';
import Card from "../components/Cards/Card";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/Navbar";
import SpeedDial from "../components/SpeedDial/SpeedDial";
import ProgressBar from "../components/ProgressBar/ProgressBar";

import Image from '../components/Image/ImageComp';


//import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';



//Sofia Comps
import Title from '../components/Header/Header';
import AppText from '../components/AppText/AppText';
import Input from '../components/Input/Input';
import AppButton from '../components/Button/Button';
import SignUp from '../components/SignUp/SignUp';
import Icon from '../components/Icon/Icon';


export default function Home() {
  return (
    <div className="App">
      <h1 className='text-3xl'>Safehouse</h1>
      <br />
      {/* <Dropdown
        op1="Host"
        icon1={<HotelIcon />}
        op2="Evacuee"
        icon2={<ForestIcon />}
      /> */}
      <br />
      <Card />
      <br />
      <Slider />
      <br />
      <Navbar />
      <br />
      <SpeedDial />
      <br />
      <Image />
      <br />
      <ProgressBar />

      <br />
      <Title />
      <br />
      <AppText />
      <br />
      <Input />
      <br />
      <AppButton />
      <br />
      <SignUp />
      <br />
      <Icon />

    </div>
  );
}