import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/index.jsx'
import AuthProvider from './src/contexts/auth.jsx'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#F0F4FF' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
