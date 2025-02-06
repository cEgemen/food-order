
import { Image, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const FlatListCard = ({product,onPress}) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
        <Image style={styles.image} source={{uri:product.image}} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price} >$ {product.price}</Text>
    </Pressable>
  )
}

export default FlatListCard

const styles = StyleSheet.create({
     wrapper:{
        backgroundColor:"rgb(254, 251, 251)",
        borderRadius:8,elevation:5
     },
     image : {
        width:"50%",aspectRatio:1,resizeMode:"contain",alignSelf:"center",marginTop:5
     },
     title : {
        fontSize:17,fontWeight:"500",paddingLeft:5,paddingVertical:5
     },
     price : {
        fontSize:14,fontWeight:"500",color:"rgb(148, 138, 204)",paddingLeft:5,paddingBottom:5
     }
})