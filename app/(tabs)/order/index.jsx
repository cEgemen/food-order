import { ActivityIndicator, FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import * as Crypto from "expo-crypto"
import { colors, spaces } from '../../../consdants/app_consts'
import FlatListOrderCard from '../../../components/cards/FlatListOrderCard'
import { router } from 'expo-router'
import { userContext } from '../../../managment/userContext'
import { BASE_URL } from '../../../secrets'

const Orders = () => {
    const {userState:{id,token,role}} = useContext(userContext)
    const mod = role === "ADMIN" ? 1 : 2;  
    const [isLoading,setIsLoading] = useState(true)
    const [orders,setOrders] = useState(null)
   
    useEffect(() => {
           const fetchData = () => {
            const url = mod === 1 ? "allOrders" : ("user/"+id)
            fetch(BASE_URL+"order/"+url,{
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
                          ToastAndroid.showWithGravity("The error occurred during fetcing orders.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
                        }
                        else {
                           const {orders} = ok_data;
                           setIsLoading(false)
                           setOrders(orders)
                        }
                       
                    })
             .catch(err => {console.log("err : ",err)})
           }

           fetchData()

    },[])
  
    if(isLoading) return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <ActivityIndicator size={"large"} color={colors.secondary} />   
                         </View>
  
   const orderCardOnPress = (orderId) => {
        router.push({pathname:"/order/"+orderId,params:{mod}})
  }

  return (
     <>
       <FlatList 
        style={styles.wrapper}
        keyExtractor={((item,index) => Crypto.randomUUID())}
        data={orders}
        renderItem={({item,index}) => {
                return <>
                           <FlatListOrderCard order={item} onPress = {() => {orderCardOnPress(item.id)}}/>
                       </>
        }}
        contentContainerStyle = {styles.contentContainer}
       />
     </>
  )
}

export default Orders

const styles = StyleSheet.create({
    wrapper : {
       flex:1,backgroundColor:colors.background,padding:spaces.middle
    },
    contentContainer : {
       gap:spaces.high
    }
})