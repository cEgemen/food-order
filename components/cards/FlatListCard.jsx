
import { Image, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'

const FlatListCard = ({product,onPress}) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
        <Image style={styles.image} source={{uri:product.image}} />
        <Text style={styles.title} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.price} >$ {product.price}</Text>
    </Pressable>
  )
}

export default FlatListCard

const styles = StyleSheet.create({
     wrapper:{
       flex:1, backgroundColor:colors.background,
        borderRadius:radius.small,elevation:elevation.small,borderColor:colors.gray,borderWidth:1
     },
     image : {
      width:"50%",aspectRatio:1, resizeMode:"contain",alignSelf:"center",marginTop:spaces.small
     },
     title : {
        fontSize:fonts.middleSize,fontWeight:fonts.smallWeight,paddingLeft:spaces.small,paddingVertical:spaces.small
     },
     price : {
        fontSize:fonts.smallSize,fontWeight:fonts.smallWeight,color:colors.secondary,paddingLeft:spaces.small,paddingBottom:spaces.small
     }
})