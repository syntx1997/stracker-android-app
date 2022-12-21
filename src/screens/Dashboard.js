import React, { useEffect } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { WebView } from 'react-native-webview'
import { View } from 'react-native'
import axios from 'axios'

export default function Dashboard({ navigation }) {

  // useEffect(() => {
  //   const checkInterval = setInterval(() => {
  //     axios.get('http://web.stracker-fms.com/func/auth/check-if-logged-in')
  //     .then(function(res) {
  //       const data = res.data;

  //       if(data.logged_in == false) {
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: 'StartScreen' }]
  //         });
  //         clearInterval( checkInterval );
  //       }

  //     })
  //   }, 1000)
  // }, [])

  const checkIfLoggedIn = () => {
    console.log('running...');
    axios.get('http://web.stracker-fms.com/func/auth/check-if-logged-in')
      .then(function(res) {
        const data = res.data;

        if(data.logged_in == false) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }]
          });
        }

      })
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView style={{ flex: 1 }} source={{ uri: 'https://web.stracker-fms.com/dashboard/staff/index' }}
      onLoad={ checkIfLoggedIn } />
    </View>
  )
}
