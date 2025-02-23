
import { ActivityIndicator, FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import * as Crypto from "expo-crypto"
import FlatListOrderProductCard from '../../../components/cards/FlatListOrderProductCard'
import FlatListOrderCard from '../../../components/cards/FlatListOrderCard'
import { colors, elevation, spaces } from '../../../consdants/app_consts'
import { BASE_URL } from '../../../secrets'
import { userContext } from '../../../managment/userContext'
import { orderStatus } from '../../../consdants/productconsts'
import OrderStatusButton from '../../../components/buttons/OrderStatusButton'

const OrderDetail = () => {
  const {id,mod} = useLocalSearchParams()
  const {userState:{token}} = useContext(userContext)
  const [isLoading,setIsLoading] = useState(true)
  const [order,setOrder] = useState(null)
  const [statusState,setStatusState] = useState()
 
  useEffect(() => {
         const fetchData = () => {
            fetch(BASE_URL+"order/"+id,{
               method:"GET",
               headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+token
               }
          }).then(res => res.json())
            .then(data => {
                        const {ok_data} = data
                        if(ok_data === null)
                        {
                          ToastAndroid.showWithGravity("The error occurred during fetcing order.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
                        }
                        else {
                           const {order} = ok_data;
                           setIsLoading(false)
                           setOrder(order)
                           const index = orderStatus.indexOf(order.status)
                           setStatusState(index)
                        }
                       
                    })
             .catch(err => {console.log("err : ",err)}) 
         }
         fetchData()
  },[])

  const onStatusPress = (status) => {
   if(order !== null)
   { 
     const data = {...order,status}
     setIsLoading(true)
     fetch(BASE_URL+"order/updateOrder/"+id,{
          method:"PUT",
         body:JSON.stringify(data),
         headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+token
       }
     })
      .then(res => res.json())
      .then(data => {
          const {ok_data} = data;
          if(ok_data !== null)
          {
             const {order} = ok_data
             setOrder(order)
             const index = orderStatus.indexOf(order.status)
             setStatusState(index)
             setIsLoading(false)
          }
          else
          {
            ToastAndroid.showWithGravity("The error occurred during updating order.",ToastAndroid.BOTTOM,ToastAndroid.LONG);
          }
      })
      .catch(err => console.log("err : ",err))
   }
  }

  if(isLoading) return <>
                       <Stack.Screen
                         options={{
                            headerShown:false
                                 }}
                        />          
                      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                          <ActivityIndicator size={"large"} color={colors.secondary} />   
                       </View>
                      </>
                      
  return (
    <>
       <Stack.Screen
           options={{
                title:`Order #${id.substring(0,20)}...`,
                headerTitleAlign:"center",
                headerShadowVisible:false,
                headerShown:true  
           }}
        />
          { parseInt(mod) === 1 && <View style={styles.topContainer}>
                  <Text style={{paddingLeft:spaces.small}}>Status</Text>
                  <View style={styles.topButtonsContainer}>
                      <OrderStatusButton isActive={statusState === 0} text={orderStatus[0]} onPress={() => {
                           onStatusPress(orderStatus[0])
                      }} />
                       <OrderStatusButton isActive={statusState === 1} text={orderStatus[1]} onPress={() => {
                           onStatusPress(orderStatus[1])
                      }} />
                       <OrderStatusButton isActive={statusState === 2} text={orderStatus[2]} onPress={() => {
                           onStatusPress(orderStatus[2])
                      }} />
                       <OrderStatusButton isActive={statusState === 3} text={orderStatus[3]} onPress={() => {
                           onStatusPress(orderStatus[3])
                      }} />
                  </View>
          </View>}
        <FlatList
               style={styles.wrapper}
               data={order.order_items}
               keyExtractor={((item,index) => Crypto.randomUUID())}
               renderItem={({item,index}) => {
                    return <>
                              <FlatListOrderProductCard product={item} /> 
                           </>
               }}
               ListHeaderComponent={ <>
                                        <FlatListOrderCard order={order} cardStyle={{backgroundColor:colors.normal_gray,elevation:elevation.high}} />
                                     </>
                            }
               ListHeaderComponentStyle = {styles.headerComp}             
               contentContainerStyle={styles.contentContainer}               
         />
    </>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
       wrapper : {
          flex:1,backgroundColor:colors.background,padding:spaces.middle
       },
       headerComp:{
           width:"100%",paddingVertical:spaces.middle
       },
       contentContainer : {
          gap:spaces.high,alignItems:"center"
       },
       topContainer : {
          backgroundColor:colors.background,width:"100%",height:80,justifyContent:"space-around"
       }, 
       topButtonsContainer:{
         width:"100%",flexDirection:"row",justifyContent:"space-around",alignItems:"center"
       }
})