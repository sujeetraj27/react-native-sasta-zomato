 import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
 

const Stack = createNativeStackNavigator();

 function AuthNavigation() {
   return (
    <Stack.Navigator>
      <Stack.Screen name="Welcomepage" component={WelcomeScreen}
       options={{
        headerShown:false
       }}
       />
      <Stack.Screen name="signup" component={SignupScreen} 
        options={{
        headerShown:false
       }}
      />
      <Stack.Screen name="login" component={LoginScreen} 
        options={{
        headerShown:false
       }}
      />
      
    </Stack.Navigator>
   )
 }
 
 export default AuthNavigation