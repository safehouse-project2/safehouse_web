//import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import React from 'react';

//Sofia Comps
import Title from '../components/Header';
import AppText from '../components/AppText';
import Input from '../components/Input';
import Button from '../components/Button';
import SignUp from '../components/SignUp';
import Icon from '../components/Icon';


export default function Home() {

  return (
    <div className="App">
      <h1>Safehouse</h1>
      <Title/>
      <AppText/>
      <Input/>
      <Button/>
      <SignUp/>
      <Icon/>
    </div>
  );
}