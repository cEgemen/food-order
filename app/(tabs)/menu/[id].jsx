import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import products from '../../../assets/datas/products'
import editIcon from "../../../assets/icons/edit.png"
import CustomButtons from '../../../components/buttons/CustomButtons'
import { colors, elevation, fonts, radius, spaces } from '../../../consdants/app_consts'
import { productSizes, productSizesRatio } from '../../../consdants/productconsts'
import { productContext } from '../../../managment/productContext'
import * as Crypto from "expo-crypto"
import StackPressableIcon from '../../../components/buttons/StackPressableIcon'

const ProductDetail = () => {
  const {addProduct} = useContext(productContext)
  const [selectIndex,setSelectIndex] = useState(0)
  const {id,mod} = useLocalSearchParams()

  let product = products.find((value,index) => value.id === parseInt(id))
  
  const selectOnPress = (index) => {
       setSelectIndex(index)
  }

  const addProductCard = () => {
       addProduct(product,productSizes[selectIndex])
       router.back()
  }

  const goToEditPage = () => {
      router.push({pathname:"/createAndUpdate",params:{id:id}})
  }

  const onDelete = () => {
    
  }

  let content = mod === 1 ? 
                <>
       <Text style={styles.text} numberOfLines={1}>Select Size</Text>
       <View style={styles.sliderWrapper}>
         {productSizes.map((size,index) => {
            return     <Pressable style={[styles.sliderContainer,{backgroundColor:selectIndex === index ? colors.dark_gray : colors.background}]} key={Crypto. randomUUID()} onPress={() =>  selectOnPress(index)}>
                         <Text style={[styles.sliderText,{color:selectIndex === index ? colors.background : colors.dark_gray}]}> {size} </Text>
                      </Pressable> 
          })}
       </View>
       <View style={styles.detailsWrapper}>
        <Text style={styles.text}>{productSizes[selectIndex]} {product.name}  </Text>
        <Text style={[styles.text,{color:colors.secondary}]}>$ {(product.price * productSizesRatio[selectIndex]).toFixed(2)}</Text> 
       </View>
       <CustomButtons  onPress={addProductCard} buttonStyle={styles.buttonStyle} label="Add Product" />    
                </>  :
                <>
       <View style={styles.detailsWrapper2}>
        <Text style={styles.text}> {product.name}  </Text>
        <Text style={[styles.text,{color:colors.secondary}]}>$ {(product.price).toFixed(2)}</Text> 
       </View> 
       <View style={styles.buttonsWrapper}>
         <CustomButtons label='Edit' buttonStyle={{width:"45%"}} onPress={goToEditPage} />
         <CustomButtons label='Delete' buttonStyle={{width:"45%"}} onPress={onDelete} />
       </View>
                </>
                   
  return (
    <>
      <Stack.Screen 
         options={{
             title : product.name,
             headerTitleAlign:"center",
             headerRight:mod === 1 ? () => {
                return <>
                         <StackPressableIcon icon={editIcon} onPress={goToEditPage}  />
                       </>
             } : null
         }}
      />

      <View style={styles.wrapper}>
       <Image style={styles.image} source={{uri : product.image}} />
       {content}
    </View>
    </>
   
  )
}

export default ProductDetail

const styles = StyleSheet.create({
     wrapper : {
        padding:10  , backgroundColor:colors.background,flex:1
     },
     image : {
        aspectRatio:1,width:"100%",resizeMode:"contain"
     },
     text : {
          fontSize:fonts.middleSize,fontWeight:fonts.middleWeight,marginVertical:spaces.middle
     },
     sliderWrapper : {
       width:"100%" , flexDirection:"row",justifyContent:"space-around",marginVertical:spaces.high
     },
     sliderContainer: {
        width:40,height:40,borderRadius:radius.circle(40),justifyContent:"center",alignItems:"center",elevation:elevation.small
     } ,
     sliderText : {
        
     },
      detailsWrapper : {
        flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems:"center",marginVertical:"auto"
      },
      detailsWrapper2 : {
         flexDirection:"row",width:"100%",justifyContent:"space-around",alignItems:"center",marginTop:spaces.high
      },
     buttonsWrapper:{
       flexDirection:"row",justifyContent:"space-around",marginVertical:"auto"
     }, 
     buttonStyle :{marginVertical:"auto",elevation:elevation.middle}
})