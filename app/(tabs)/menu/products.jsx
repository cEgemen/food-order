
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../../../assets/datas/products'
import FlatListCard from '../../../components/cards/FlatListCard'
import { router } from 'expo-router'
import { colors, spaces } from '../../../consdants/app_consts'
import * as Crypto from "expo-crypto"

export default function Products() {

  const onPress = (id) => {
       router.push("/menu/"+id)
  }

  return (
   <View  style={styles.wrapper}>
    <FlatList 
         data={products}
         keyExtractor={(item) => Crypto.randomUUID()}
         renderItem={({item}) => {
               return <>
                        <FlatListCard product={item} onPress={() => onPress(item.id)} /> 
                     </>
         }}
         contentContainerStyle={styles.contentStyle}
         columnWrapperStyle={styles.columnStyle}
         showsVerticalScrollIndicator={false}
         numColumns={2}
     />
   </View> 
     
  )
}

const styles = StyleSheet.create({
     wrapper:{
       flex:1, padding:spaces.middle,backgroundColor:colors.background
     },
     contentStyle : {
        gap:spaces.middle
     },
     columnStyle:{
       gap:spaces.middle
     }
})