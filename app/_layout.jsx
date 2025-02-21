import React from 'react'
import { Stack } from 'expo-router'
import ProductContextProvider from '../managment/productContext'
import UserContextProvider from "../managment/userContext"

const AppLayout = () => {
  return (
 <UserContextProvider>
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
                  headerTitleAlign:"center",
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
 </UserContextProvider>    
  )
}

export default AppLayout