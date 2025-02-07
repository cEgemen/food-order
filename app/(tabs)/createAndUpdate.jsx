
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, spaces } from '../../consdants/app_consts'
import emptyPizza from "../../assets/image/emptyPizza.png"
import InputWithLabel from '../../components/forms/InputWithLabel'
import CustomButtons from '../../components/buttons/CustomButtons'

const CreateAndUpdate = () => {
  const [formState , setFormState] = useState({name:"",price:""})
  const [errorData , setErrorData] = useState({errorData : {name : [],price : []} })
  const isOkey = () => {
     const errorData = {name:[],price : []}     

     if(formState.name === "")
        {
           errorData.name.push("The Name should not be empty. ")
        }
      if (formState.name.length < 3)
      {
           errorData.name.push("The name should be at least 3 characters")
      } 
       if (formState.price === "" || parseInt(formState.price) === NaN || parseFloat(formState.price) === NaN)
      {
          errorData.price.push("The price should be in the appropriate format")
      }
       if(parseFloat(formState.price) <= 0.0)
      {
          errorData.price.push("Price should be greater than 0.0")
      }  
      setErrorData({errorData:{...errorData}})
      return (errorData.name.length === 0 || errorData.price.length === 0) ? true : false
  }
  const submit = () => {
      if(isOkey())
      {
        console.log("save")
      }
  }

  return (
    <View style={styles.wrapper}>
         <View style={styles.imageWrapper}>
          <Image source={emptyPizza} style={[styles.image]} />
          <TouchableOpacity onPress={() => {}}>
           <Text style={styles.imageLabel}>Select Image</Text> 
          </TouchableOpacity>  
         </View>
         <InputWithLabel label='Name' onChange={(text) => setFormState(oldState => {return {...oldState,name : text}})} placeholder='Margarita...' value={formState.name} errors={errorData.errorData.name}  />
         <InputWithLabel keyboardType='numeric' containerStyle={{paddingBottom : spaces.high}} placeholder='9.99' value={formState.price} label='Price' onChange={(text) => setFormState(oldState => {return {...oldState,price : text}})} errors={errorData.errorData.price}  />
         <CustomButtons onPress={submit} label='Create' buttonStyle={{marginTop : spaces.high}} />
    </View>
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