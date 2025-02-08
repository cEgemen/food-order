
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '../../../assets/datas/orders'
import * as Crypto from "expo-crypto"
import FlatListOrderProductCard from '../../../components/cards/FlatListOrderProductCard'
import FlatListOrderCard from '../../../components/cards/FlatListOrderCard'
import { colors, elevation, spaces } from '../../../consdants/app_consts'

const OrderDetail = () => {
  const {id} = useLocalSearchParams()
  const order = orders.find((item , index) => parseInt(item.id) === parseInt(id))
  return (
    <>
       <Stack.Screen
           options={{
                title:`Order #${id}`,
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