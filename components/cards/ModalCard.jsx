
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'

const ModalCard = ({product}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{uri:product.image}} />
      <View style={styles.detailsWrapper}>
           <Text style={styles.title}>{product.name}</Text>
           <Text style={styles.subTitle}>XL</Text>
      </View>
      <View style={styles.logicWrapper}>
         <Pressable>
             <Text style={styles.logicText}>-</Text>
         </Pressable>
         <Text style={[styles.title,{width:50,textAlign:"center"}]} numberOfLines={1}>1</Text>
         <Pressable>
             <Text style={styles.logicText}>+</Text>
         </Pressable>
      </View>
    </View>
  )
}

export default ModalCard

const styles = StyleSheet.create({
     wrapper : {
        width:"100%",height:60,backgroundColor:colors.gray,elevation:elevation.small,borderRadius:radius.middle
        ,flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:spaces.small
     },
     image : {
          width:50,height:50,resizeMode:"contain" ,marginRight:spaces.high
     },
     detailsWrapper : {
       flex:1
     },
     title : {
        fontSize:fonts.smallSize,fontWeight:fonts.middleWeight
     },
     subTitle : {
        fontSize:fonts.smallSize,fontWeight:fonts.smallWeight
     },
     logicWrapper : {
         flexDirection:"row",gap:spaces.small,justifyContent:'center',alignItems:"center"
     },
     logicText: {
         fontSize:fonts.middleSize,fontWeight:fonts.highWeight
     }
})