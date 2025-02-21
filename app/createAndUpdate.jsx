
import { ActivityIndicator, Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { colors, fonts, spaces } from '../consdants/app_consts'
import emptyPizza from "../assets/image/emptyPizza.png"
import InputWithLabel from '../components/forms/InputWithLabel'
import CustomButtons from '../components/buttons/CustomButtons'
import { Stack, useLocalSearchParams } from 'expo-router'
import { productNameCheck,priceCheck} from '../utils/validations'
import { BASE_URL } from '../secrets'
import { userContext } from '../managment/userContext'

const CreateAndUpdate = () => {
  const {id} = useLocalSearchParams()
  const {userState:{token}} = useContext(userContext)
  const [formState , setFormState] = useState({name:"",price:"",image:""})
  const [isLoading , setIsLoading] = useState(true)
  const [errorData , setErrorData] = useState({name : [],price : [],isReady:false})

  useEffect(() => {
        if(id)
        {
             const getProduct = async () => {
                   fetch(BASE_URL+"product/"+id,{
                       method:"GET",
                       headers:{
                            "Content-Type":"application/json",
                            "Authorization":"Bearer "+token
                       }
                   }).then(res => res.json())
                     .then(data => {
                          const {ok_data} = data;
                                                   if(ok_data !== null)
                                                   { 
                                                      setFormState(ok_data.product)
                                                      setIsLoading(false) 
                                                   }
                                                   else {
                                 ToastAndroid.showWithGravity("The error occurred during fetcing product.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
                                                   }
                     })
                     .catch(err => {
                         console.log("err : ",err)
                     })
             }    
             
             getProduct()
        }
  },[])

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

   if(isLoading) return  <>
                            <Stack.Screen options={{
                                   headerShown:false
                            }} />
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                              <ActivityIndicator size={'large'} color={colors.secondary} />
                            </View>  
                         </>

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