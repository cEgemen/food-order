
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts, radius, spaces } from '../../consdants/app_consts'

const FlatListOrderProductCard = ({product}) => {
  const {quantity , size,id,name,image,price} = product
  return (
    <View style={styles.wrapper}>
       <Image style={styles.image} source={{uri:image}}  />
       <View style={styles.detailWrapper}>
          <Text style={styles.title}> {name}  {size} </Text>
          <Text style={styles.subTitle} > {price*quantity} $ </Text>
       </View>
       <Text style={styles.subTitle}>{quantity}</Text>
    </View>
  )
}

export default FlatListOrderProductCard

const styles = StyleSheet.create({
     wrapper : {
        width:"90%",flexDirection:"row",alignItems:"center",padding:spaces.small,backgroundColor:colors.light_gray,borderRadius:radius.middle
     },
     image: {
          width:50,aspectRatio:1,resizeMode:"contain" 
     },
     detailWrapper : {
          flexGrow:1,gap:spaces.small,paddingLeft:spaces.small
     },
     title : {
        fontSize : fonts.smallSize, fontWeight : fonts.middleWeight
     },
     subTitle : {
         fontSize : fonts.smallSize, fontWeight : fonts.smallWeight,color:colors.secondary
     }


})