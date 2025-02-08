
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '../../../assets/datas/orders'
import * as Crypto from "expo-crypto"
import FlatListOrderProductCard from '../../../components/cards/FlatListOrderProductCard'

const OrderDetail = () => {
  const {id} = useLocalSearchParams()
  const order = orders.find((item , index) => parseInt(item.id) === parseInt(id))
  return (
    <View>
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
                              <FlatListOrderProductCard order={item} /> 
                           </>
               }}
         />
    </View>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
       wrapper : {

       },
       contentContainer : {

       }
})