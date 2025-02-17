
import {StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'
import InputWithLabel from '../../components/forms/InputWithLabel'
import CustomButtons from '../../components/buttons/CustomButtons'
import PasswordInputWithLabel from '../../components/forms/PasswordInputWithLabel'
import {router } from 'expo-router'
import { emailCheck,passwordCheck } from '../../utils/validations'

const SignIn = () => {
  
  const [formState , setFormState] = useState({email : "",password : ""})
  const [errors , setErrors] = useState({email:[],password:[]})
 
  const isReady = errors.email.length !== 0 && errors.password.length !== 0

  const onSubmit = () => {
      if(isReady)
      {

      }
  }

  const validation = (mod,value) => {
       if(mod === 1)
       {
          const result = emailCheck(value);
          setErrors(oldState => {
                const email = result.result ? [] : Array.of(result.message);
                return {...oldState,email};
          })
       }
       else if(mod === 2) 
       {
           const result = passwordCheck(value);
           setErrors(oldState => {
                const password = result.result ? [] : Array.of(result.message)
                return {...oldState,password}
           })
       } 
  }
    
  return (
       
       <View style={styles.wrapper}>
           <View style={styles.header}>
             <Text style={styles.title}>Hey,</Text>
             <Text style={styles.title}>Welcome</Text>
             <Text style={styles.title}>Back</Text>
           </View>
           <View style={styles.container}>
                <View style={styles.inputWrapper}>
                   <InputWithLabel label='Email' placeholder='****@****' value={formState.email} onChange={(text) => setFormState(oldState => {return {...oldState,email:text}})} keyboardType='email-address' errors={errors.email} endEditing={() => validation(1,formState.email)}/>
                   <PasswordInputWithLabel label='Password' placeholder='******' value={formState.password} onChange={(text) => setFormState(oldState => {return {...oldState,password:text}})} errors={errors.password} endEditing={() => validation(2,formState.password)} />
                </View>
                
                   <Text style={styles.linkText}>Don't have an account?
                        <Text onPress={() => {router.push("/signUp")}} style={styles.linkSubText}> Sign Up</Text>
                   </Text>

                <CustomButtons disabled={!isReady} onPress={onSubmit} buttonStyle={styles.button} labelStyle={{color:colors.background}} label='Sign In' />
           </View>
       </View>
   )
 }
 
 export default SignIn
 
 const styles = StyleSheet.create({
      wrapper : {
           flex:1,backgroundColor:colors.third
      },
      header: {
        paddingHorizontal:spaces.middle,height:"30%",justifyContent:"center",gap:spaces.small
      },
      title:{
         fontSize:fonts.highSize * 1.5 ,fontWeight:fonts.highWeight,color:colors.background
      },
      container : {
           position:"absolute",bottom:0,width:"100%",height:"70%",backgroundColor:colors.background,
           borderTopLeftRadius:radius.middle * 3, borderTopRightRadius:radius.middle * 3,elevation:elevation.middle,paddingHorizontal:spaces.middle
      },
      inputWrapper : {
          paddingTop:spaces.high*2
      },
      linkText : {
         marginTop:spaces.high,fontSize:fonts.smallSize,fontWeight:fonts.middleWeight,textAlign:"right"
      },
      linkSubText : {
       color:colors.secondary
     },
      button : { 
          marginVertical:"auto",backgroundColor:colors.dark_gray,height:50
      }
     
 })