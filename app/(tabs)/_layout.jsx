
import React from 'react'
import { Tabs } from 'expo-router'
import TabPressableIcon from '../../components/buttons/TabPressableIcon'
import ordersIcon from "../../assets/icons/orders.png"
import restaurantIcon from "../../assets/icons/restaurant.png"
import { colors } from '../../consdants/app_consts'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
          headerShown:false,
    }}>
         <Tabs.Screen
             name='index'
             options={{
                  href:null
             }}
          />
         <Tabs.Screen 
            name='menu'
            options={{
                 title:"",
                 tabBarIconStyle:{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},
                 tabBarIcon:({ focused,colors,size}) => {
                        return <>
                                  <TabPressableIcon focused={focused} icon={restaurantIcon} text={"Menu"}  />
                               </>
                     },        
                    }   
                   }      
         />
         <Tabs.Screen 
            name="order"
            options={{
                 title:"",
                 tabBarIconStyle:{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"},
                 tabBarIcon:({ focused,colors  ,size}) => {
                        return <>
                                  <TabPressableIcon focused={focused} icon={ordersIcon} text={"Orders"} />
                               </>
                     },        
                    }   
                   }
         />
    </Tabs>
  )
}