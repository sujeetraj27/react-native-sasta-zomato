import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './screen/AuthNavigation';

function RootNavigation() {
  return (
    <NavigationContainer>
        <AuthNavigation />
    </NavigationContainer>
  )
}

export default RootNavigation