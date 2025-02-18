
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, spaces } from '../consdants/app_consts'
import emptyPizza from "../assets/image/emptyPizza.png"
import InputWithLabel from '../components/forms/InputWithLabel'
import CustomButtons from '../components/buttons/CustomButtons'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '../assets/datas/products'
import { productNameCheck,priceCheck} from '../utils/validations'

const CreateAndUpdate = () => {
  const {id} = useLocalSearchParams()
  let product = {name:"",price:"",image:""}
  
  id  && (product = products.find((value,index) => value.id === parseInt(id)))
  
  const [formState , setFormState] = useState({...product})
  
  const [errorData , setErrorData] = useState({name : [],price : [],isReady:false})

  const onUpdate = () => {

  }

  const onCreate = () => {

  }

  const validation = (inputMod,value) => {
          if(inputMod === 1)
          {
             const result = productNameCheck(value);
             setErrorData(oldState => {
                 const errData = result.result  ? {name:[],isReady:true}  :  {name:Array.of(result.message),isReady:false}
                 return {...oldState,...errData}
             })
          }
          else if(inputMod === 2)
          {
            const result = priceCheck(value);
            setErrorData(oldState => {
                const errData = result.result  ? {price:[],isReady:true}  :  {price:Array.of(result.message),isReady:false}
                return {...oldState,...errData}
            })
          }
  }

  return (
      <>
    
     <Stack.Screen options={{
           headerTitleAlign:"center",
           headerTitle: id ? formState.name : "Create",
           headerShadowVisible:false
     }} /> 
     
     <View style={styles.wrapper}>
         <View style={styles.imageWrapper}>
          <Image source={id === null ? emptyPizza : {uri:formState.image }} style={[styles.image]} />
          <TouchableOpacity onPress={() => {}}>
           <Text style={styles.imageLabel}>Select Image</Text> 
          </TouchableOpacity>  
         </View>
         <InputWithLabel label='Name' onChange={(text) => setFormState(oldState => {return {...oldState,name : text}})} placeholder='Margarita...' value={formState.name} errors={errorData.name} containerStyle={{marginVertical:spaces.high}} endEditing={() => validation(1,formState.name)}  />
         <InputWithLabel keyboardType='numeric' containerStyle={{paddingBottom : spaces.high}} placeholder='9.99' value={formState.price.toString()} label='Price' onChange={(text) => setFormState(oldState => {return {...oldState,price : text}})} errors={errorData.price} endEditing={() => validation(2,formState.price)} />
         <CustomButtons disabled={!(errorData.isReady)} onPress={id===null ? onCreate : onUpdate} label={id===null ? 'Create' : "Edit"} buttonStyle={{marginVertical : "auto"}} />
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
         width:"100%",alignItems:"center",gap:spaces.middle,paddingVertical:spaces.middle
     },
     image : {
         width:180,height:180,resizeMode:"contain"
     },
     imageLabel : {
         fontSize:fonts.smallSize,fontWeight:fonts.middleWeight,color:colors.secondary
     } ,
   

})