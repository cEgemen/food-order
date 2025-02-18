
import {StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'
import InputWithLabel from '../../components/forms/InputWithLabel'
import CustomButtons from '../../components/buttons/CustomButtons'
import PasswordInputWithLabel from '../../components/forms/PasswordInputWithLabel'
import {router } from 'expo-router'
import { emailCheck,passwordCheck } from '../../utils/validations'
import { BASE_URL } from '../../secrets'
import { userContext } from '../../managment/userContext'

const SignIn = () => {
  const {setUserState} = useContext(userContext)
  const [formState , setFormState] = useState({email : "",password : ""})
  const [errors , setErrors] = useState({email:[],password:[],isReady:false})
  
  const onSubmit = () => {
      if(errors.isReady)
      {
        const url = BASE_URL+"auth/signIn"
        const formData = JSON.stringify({...formState})
        fetch(url,{
            method:"POST",
            body:formData,
            headers:{
               "Content-Type":"application/json"
            }
        }).then(result => {
            return result.json()
        }).then(data => {
            const {error_data,ok_data} = data;
            if(error_data !== null)
            {
                setFormState({email:"",password:""})
                setErrors(oldState => {
                     return {...oldState,isReady:false}
                })
                ToastAndroid.showWithGravity("Try again that the error occurred during logging.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
            }
            else 
            {
                const {token,role,username} = ok_data
                const userRole = role.split("_")[1];
                setUserState({...formState,token,username,role:userRole})
                router.replace("/(tabs)/menu/products")
            }
        }).catch(err => {
                console.log("err : ",err)
        })           

      }
  }

  const validation = (mod,value) => {
       if(mod === 1)
       {
          const result = emailCheck(value);
          setErrors(oldState => {
                const data = result.result ? {email : [],isReady:true} : {email: Array.of(result.message),isReady:false};
                return {...oldState,...data};
          })
       }
       else if(mod === 2) 
       {
           const result = passwordCheck(value);
           setErrors(oldState => {
               const data = result.result ? {password : [],isReady:true} : {password: Array.of(result.message),isReady:false};
                return {...oldState,...data};
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

                <CustomButtons disabled={!(errors.isReady)} onPress={onSubmit} buttonStyle={styles.button} labelStyle={{color:colors.background}} label='Sign In' />
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