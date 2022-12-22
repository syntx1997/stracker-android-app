import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeModules, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Stack = createStackNavigator()
const { StatusBarManager } = NativeModules;

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={{ backgroundColor: '#000000' }}></StatusBar>
      <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </SafeAreaView>
  )
}
