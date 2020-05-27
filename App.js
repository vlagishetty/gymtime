import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pages/login'
import Registration from './pages/registration'


export default function App() {
  return (
    <Registration></Registration> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
