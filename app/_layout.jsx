import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {
  return (
   <Stack screenOptions={{
       
   }}>

      <Stack.Screen 
             name='(tabs)'
             options={{
                headerShown:false
             }}
      />

      <Stack.Screen 
             name='card'
             options={{
                  title:"Card",
                  presentation:"modal"
             }}
      />

   </Stack>
  )
}

export default AppLayout