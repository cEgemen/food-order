
import { StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'
import InputWithLabel from '../../components/forms/InputWithLabel'
import CustomButtons from '../../components/buttons/CustomButtons'
import PasswordInputWithLabel from '../../components/forms/PasswordInputWithLabel'
import {router} from 'expo-router'
import { BASE_URL } from '../../secrets'
import { emailCheck,usernameCheck,passwordCheck } from '../../utils/validations'

const SignUp = () => {
  const [formState , setFormState] = useState({username : "",password : "",email:""})
  const [errors,setErrors] = useState({username:[],password:[],email:[],isReady:false})  


  const onSubmit = () => {
      if(errors.isReady)
      {
          const formData = JSON.stringify({...formState,role:"ROLE_USER"})
          console.log("formData : ",formData)
          const url = BASE_URL + "auth/signUp"
          console.log("url : ",url)
          fetch(url,{
               body:formData,
               headers : {
                    "Content-Type":"application/json"
               },
               method:"POST"
          })
          .then(result => {
               return result.json()
          })
          .then(data => {
               console.log("data : ",data)
               const {error_data , ok_data} = data;
               if(ok_data === null)
               {
                    setFormState({username:"",email:"",password:""})
                    setErrors(oldState => {
                         return {...oldState,isReady:false}
                    })
                    ToastAndroid.showWithGravity("Try again that error occurred during registration.",ToastAndroid.LONG,ToastAndroid.BOTTOM)
               }
               else
               {
                 router.back()   
               } 
          })
          .catch(err => {
               console.log("err : ",err)
          })
      }
  }

  const valided = (mod,value) => {
       if(mod === 1)
       {
          const result = usernameCheck(value)
          setErrors(oldState => {
               const data = result.result ? {username : [],isReady:true} : {username: Array.of(result.message),isReady:false};
               return {...oldState,...data};
          })
       }
       else if(mod === 2)
       {
          const result = emailCheck(value)
          setErrors(oldState => {
               const data = result.result ? {email : [],isReady:true} : {email: Array.of(result.message),isReady:false};
               return {...oldState,...data};
          })
       }
       else if(mod === 3)
       {
          const result = passwordCheck(value)
          console.log("result : ",result)
          setErrors(oldState => {
               const data = result.result ? {password : [],isReady:true} : {password: Array.of(result.message),isReady:false};
               return {...oldState,...data};
          })
       }
  }

    
  return (
       <View style={styles.wrapper}  >
           <View style={styles.header}>
             <Text style={styles.title}>Let's Get </Text>
             <Text style={styles.title}>Started</Text>
           </View>
           <View style={styles.container}>
                <View style={styles.inputWrapper}>
                   <InputWithLabel label='UserName' placeholder='Jack...' value={formState.username} onChange={(text) => setFormState(oldState => {return {...oldState,username:text}})} errors={errors.username} endEditing={() => valided(1,formState.username)} />
                   <InputWithLabel label='Email' placeholder='****@****' value={formState.email} onChange={(text) => setFormState(oldState => {return {...oldState,email:text}})} keyboardType="email-address" errors={errors.email} endEditing={() => valided(2,formState.email)} />
                   <PasswordInputWithLabel label='Password' placeholder='******' value={formState.password} onChange={(text) => setFormState(oldState => {return {...oldState,password:text}})} errors={errors.password} endEditing={() => valided(3,formState.password)} />
                </View>
                <Text style={styles.linkText}>Already have an account?
                        <Text onPress={() => {router.back()}} style={styles.linkSubText}> Sign In</Text>
                </Text>
                <CustomButtons disabled={!errors.isReady} onPress={onSubmit} buttonStyle={styles.button} labelStyle={{color:colors.background}} label='Sign Up' />
           </View>
       </View>
   )
 }
 
 export default SignUp
 
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
