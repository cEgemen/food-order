
import React from 'react'
import { router, Stack } from 'expo-router'
import StackPressableIcon from '../../../components/buttons/StackPressableIcon'
import lunchIcon from "../../../assets/icons/lunch.png"

export default function _layout() {

  const onPress = () => {
        router.push("/card")
  }

  return (
     <Stack >
        <Stack.Screen 
              name='products'
              options={{
                   title:"Menu",
                   headerTitleAlign:"center",
                   headerRight:() => {
                       return <>
                                  <StackPressableIcon icon={lunchIcon} onPress={onPress} />
                              </>
                   }
              }}
         />
     </Stack>
  )
}