
import { StyleSheet} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const OrderLayout = () => {
  return (
             <Stack>
                  <Stack.Screen 
                     name='index'
                     options={{
                         headerTitle:"Orders",
                         headerTitleAlign:"center",
                         headerShadowVisible:false
                     }}
                  />
             </Stack>
  )
}

export default OrderLayout

const styles = StyleSheet.create({})