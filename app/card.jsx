import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext } from 'react'
import { colors, elevation, spaces } from '../consdants/app_consts'
import ModalCard from '../components/cards/ModalCard'
import { productContext } from '../managment/productContext'
import * as Crypto from "expo-crypto"
import CustomButtons from '../components/buttons/CustomButtons'
import {BASE_URL} from "../secrets"
import { userContext } from '../managment/userContext'
import { router } from 'expo-router'
 
const Card = () => {
    const {userState:{token}} = useContext(userContext)
    const {productCardState,getTotalPrice,clearCard} = useContext(productContext)
    const isEmptyCard = productCardState.length === 0
    const total = getTotalPrice()
    const onCheckout = () => {
         console.log("product : ",productCardState)
         const data = {total:parseFloat(total),status:"NEW",order_items:productCardState}
         const formData = JSON.stringify(data)
         fetch(BASE_URL+"order/addOrder",{
               method:"POST",
               body:formData,
               headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+token
               }
          })
          .then(res => res.json())
          .then(data => {
              const {ok_data} = data
              if(ok_data === null)
              {
                ToastAndroid.showWithGravity("The error occurred during fetcing product.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
              }
              else {
              const {order_id:id} = ok_data   
              clearCard()
              router.replace("/(tabs)/order/"+id)
              }
             
          })
          .catch(err => {console.log("err : ",err)})
    }
 
    return (
      <View style={styles.wrapper}>
          <FlatList 
          style={styles.flatListWrapper}
          contentContainerStyle = {styles.content}
          data={productCardState}
          keyExtractor={(item) => Crypto.randomUUID()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
                 return <>
                             <ModalCard product={item}  />
                        </>
                                   }}
          />
          <View style={styles.bottomContainer}>
              <Text >Total Price :<Text style={{color:colors.secondary}}> $ {total}</Text> </Text>
              <CustomButtons disabled={isEmptyCard} onPress={onCheckout} label={"Checkout"} />
          </View>  
      </View>
    

  )
}

export default Card

const styles = StyleSheet.create({
      wrapper : {
          flex:1,backgroundColor:colors.background
      },
      flatListWrapper : {
         
      },
      content : {
          gap:spaces.middle, padding:spaces.middle
      },
      bottomContainer: {
         width:"100%",position:"static",backgroundColor:colors.background,height:80,justifyContent:"space-around",paddingHorizontal:spaces.high,elevation:elevation.high,borderTopColor:colors.light_gray,borderTopWidth:1
      }
})