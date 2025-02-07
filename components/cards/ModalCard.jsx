
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'
import { productSizes, productSizesRatio } from '../../consdants/productconsts'
import { productContext } from '../../managment/productContext'

const ModalCard = ({product}) => {
  const {updateProduct} = useContext(productContext)
  const sizeIndex = productSizes.indexOf(product.size)
  const ratio = productSizesRatio[sizeIndex]
  const updateQuantity = (id,mode) => {
       updateProduct(id,product.size,mode)
  }
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{uri:product.image}} />
      <View style={styles.detailsWrapper}>
           <Text style={styles.title}>{product.name} {product.size}</Text>
           <Text style={styles.subTitle}>$ {(product.price * ratio  * product.quantity).toFixed(2)}</Text>
      </View>
      <View style={styles.logicWrapper}>
         <Text onPress={() => updateQuantity(product.id,-1)} style={styles.logicText}>-</Text>
         <Text style={[styles.title,{width:50,textAlign:"center"}]} numberOfLines={1}>{product.quantity}</Text>
         <Text onPress={() => updateQuantity(product.id,1)} style={styles.logicText}>+</Text>
      </View>
    </View>
  )
}

export default ModalCard

const styles = StyleSheet.create({
     wrapper : {
        width:"100%",height:60,backgroundColor:colors.light_gray,elevation:elevation.small,borderRadius:radius.middle
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
        fontSize:fonts.smallSize,fontWeight:fonts.smallWeight,color:colors.secondary
     },
     logicWrapper : {
         flexDirection:"row",gap:spaces.small,justifyContent:'center',alignItems:"center"
     },
     logicText: {
      width:20,aspectRatio:1 ,textAlign:"center",  fontSize:fonts.middleSize,fontWeight:fonts.highWeight
     }
})