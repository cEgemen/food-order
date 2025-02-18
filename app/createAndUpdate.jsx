
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, spaces } from '../consdants/app_consts'
import emptyPizza from "../assets/image/emptyPizza.png"
import InputWithLabel from '../components/forms/InputWithLabel'
import CustomButtons from '../components/buttons/CustomButtons'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '../assets/datas/products'

const CreateAndUpdate = () => {
  const {id} = useLocalSearchParams()
  let product = {name:"",price:""}
  
  id  && (product = products.find((value,index) => value.id === parseInt(id)))
  
  const [formState , setFormState] = useState({...product})
  console.log("formState.price : ",formState.price)
  
  const [errorData , setErrorData] = useState({name : [],price : [],isReady:false})

  

  return (
      <>
    
     <Stack.Screen options={{
           headerTitleAlign:"center",
           headerTitle: id ? formState.name : "Create",
           headerShadowVisible:false
     }} /> 
     
     <View style={styles.wrapper}>
         <View style={styles.imageWrapper}>
          <Image source={emptyPizza} style={[styles.image]} />
          <TouchableOpacity onPress={() => {}}>
           <Text style={styles.imageLabel}>Select Image</Text> 
          </TouchableOpacity>  
         </View>
         <InputWithLabel label='Name' onChange={(text) => setFormState(oldState => {return {...oldState,name : text}})} placeholder='Margarita...' value={formState.name} errors={errorData.name}  />
         <InputWithLabel keyboardType='numeric' containerStyle={{paddingBottom : spaces.high}} placeholder='9.99' value={formState.price.toString()} label='Price' onChange={(text) => setFormState(oldState => {return {...oldState,price : text}})} errors={errorData.price}  />
         <CustomButtons onPress={() => {}} label='Create' buttonStyle={{marginTop : spaces.high}} />
     </View>
      </>
  )
}

export default CreateAndUpdate

const styles = StyleSheet.create({
     wrapper : {
        flex:1,backgroundColor:colors.background,padding:spaces.middle
     },
     imageWrapper : {
         width:"100%",alignItems:"center",gap:spaces.high,paddingVertical:spaces.middle
     },
     image : {
         width:180,height:180,resizeMode:"contain"
     },
     imageLabel : {
         fontSize:fonts.smallSize,fontWeight:fonts.middleWeight,color:colors.secondary
     } ,
   

})