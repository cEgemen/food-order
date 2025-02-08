import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import ProductContextProvider from '../managment/productContext'

const AppLayout = () => {
  return (
  <ProductContextProvider>
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

      <Stack.Screen
             name='(auth)'
             options={{
                  headerShown:false
             }}
        />

   </Stack>
  </ProductContextProvider> 
   
  )
}

export default AppLayout