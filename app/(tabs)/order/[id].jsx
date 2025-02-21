
import { ActivityIndicator, FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import * as Crypto from "expo-crypto"
import FlatListOrderProductCard from '../../../components/cards/FlatListOrderProductCard'
import FlatListOrderCard from '../../../components/cards/FlatListOrderCard'
import { colors, elevation, spaces } from '../../../consdants/app_consts'
import { BASE_URL } from '../../../secrets'
import { userContext } from '../../../managment/userContext'

const OrderDetail = () => {
  const {id} = useLocalSearchParams()
  const {userState:{token}} = useContext(userContext)
  const [isLoading,setIsLoading] = useState(true)
  const [order,setOrder] = useState(null)
 
  useEffect(() => {
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
                         ToastAndroid.showWithGravity("The error occurred during fetcing product.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
                       }
                       else {
                          const {order} = ok_data;
                          setIsLoading(false)
                          setOrder(order)
                       }
                      
                   })
            .catch(err => {console.log("err : ",err)})

  },[])

  if(isLoading) return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                          <ActivityIndicator size={"large"} color={colors.secondary} />   
                       </View>
 
  return (
    <>
       <Stack.Screen
           options={{
                title:`Order #${id.substring(0,20)}...`,
                headerTitleAlign:"center",
                headerShadowVisible:false
           }}
        />
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
       }
})