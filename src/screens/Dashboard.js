import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { WebView } from 'react-native-webview'
import { View } from 'react-native'

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <WebView style={{ flex: 1 }} source={{ uri: 'http://192.168.1.9:8000/dashboard/staff/index' }} />
    </View>
  )
}
