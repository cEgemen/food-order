
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../../../assets/datas/products'
import FlatListCard from '../../../components/cards/FlatListCard'
import { router } from 'expo-router'

export default function Products() {

  const onPress = (id) => {
       router.push("/menu/"+id)
  }

  return (
   <View  style={styles.wrapper}>
    <FlatList 
         data={products}
         keyExtractor={(item) => item.id}
         renderItem={({item}) => {
               return <>
                        <FlatListCard product={item} onPress={() => onPress(item.id)} /> 
                     </>
         }}
         contentContainerStyle={styles.contentStyle}
         columnWrapperStyle={styles.columnStyle}
         numColumns={2}
     />
   </View> 
     
  )
}

const styles = StyleSheet.create({
     wrapper:{
        padding:10
     },
     contentStyle : {
        gap:10
     },
     columnStyle:{
       gap:10
     }
})