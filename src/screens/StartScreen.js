import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { useEffect } from 'react'
import axios from 'axios'

export default function StartScreen({ navigation }) {

  useEffect(() => {
    // const checkInterval = setInterval(() => {
    //   console.log('running...');
    //   axios.get('https://web.stracker-fms.com/func/auth/check-if-logged-in')
    //   .then(function(res) {
    //     const data = res.data;

    //     if(data.logged_in == true) {
    //       navigation.reset({
    //         index: 0,
    //         routes: [{ name: 'Dashboard' }]
    //       });
    //       clearInterval( checkInterval );
    //     }

    //   })
    // }, 1000)

    console.log('running...');
    axios.get('https://web.stracker-fms.com/func/auth/check-if-logged-in')
      .then(function(res) {
        const data = res.data;

        if(data.logged_in == true) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }]
          });
        }

      })
  }, [])

  return (
    <Background>
      <Logo />
      <Header>Stracker</Header>
      <Paragraph>
        Web and Mobile Sow Feeding Management System
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      {/* <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button> */}
    </Background>
  )
}
