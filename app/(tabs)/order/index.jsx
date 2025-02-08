import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '../../../assets/datas/orders'
import * as Crypto from "expo-crypto"
import { colors, spaces } from '../../../consdants/app_consts'
import FlatListOrderCard from '../../../components/cards/FlatListOrderCard'
import { router } from 'expo-router'

const Orders = () => {

  const orderCardOnPress = (orderId) => {
        router.push("/order/"+orderId)
  }

  return (
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