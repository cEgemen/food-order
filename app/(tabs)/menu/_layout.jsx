
import React, { useContext } from 'react'
import { router, Stack } from 'expo-router'
import StackPressableIcon from '../../../components/buttons/StackPressableIcon'
import lunchIcon from "../../../assets/icons/lunch.png"
import addIcon from "../../../assets/icons/add.png"
import { userContext } from '../../../managment/userContext'


export default function _layout() {
  
  const {userState:{role}} = useContext(userContext)
  console.log("role : ",role)
  const isAdmin = role === "ADMIN"; 

  const onPress = () => {
     isAdmin ? router.push({pathname:"/createAndUpdate",params:{id:null}}) : router.push("/card") 
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
                                  { 
                                     role === "ADMIN" ?
                                      <StackPressableIcon icon={addIcon} onPress={onPress} />
                                                      :
                                      <StackPressableIcon icon={lunchIcon} onPress={onPress} />                
                                     }
                              </>
                   }
              }}
         />
     </Stack>
  )
}