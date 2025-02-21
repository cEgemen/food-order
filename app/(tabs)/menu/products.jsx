
import { ActivityIndicator, FlatList, StyleSheet, ToastAndroid, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import FlatListCard from '../../../components/cards/FlatListCard'
import { router } from 'expo-router'
import { colors, spaces } from '../../../consdants/app_consts'
import * as Crypto from "expo-crypto"
import { userContext } from '../../../managment/userContext'
import {BASE_URL} from "../../../secrets"

export default function Products() {
  const {userState : {role,token}} = useContext(userContext)
  const [productState , setProductState] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const isAdmin = role === "ADMIN"
  const onPress = (id) => {
     router.push({pathname:"/menu/"+id,params:{mod:isAdmin ? 1 : 2}})
  }  
 
  useEffect(() => {
          const getProducts = async () => {
              fetch(BASE_URL+"product/allProducts",{
                  method:"GET",
                  headers :{
                   "Content-Type":"application/json",
                   "Authorization":"Bearer "+token
                  }    
              }).then(res => res.json())
                .then(data => {
                     const {ok_data,error_data} = data;
                     if(ok_data !== null)
                     {
                         setProductState(ok_data.products)
                         setIsLoading(false)
                     }
                     else{
                        ToastAndroid.showWithGravity("The error occurred during fetcing products.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
                     }
                })
                .catch(err => {
                   console.log("err : ",err)
                })
          }

          getProducts()
  },[])

  return (
     <>
       {
          isLoading ?
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
           <ActivityIndicator size={'large'} color={colors.secondary}/>
          </View> 
                    :
          <View  style={styles.wrapper}>
         <FlatList 
         data={productState}
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
       }
     </>
     
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