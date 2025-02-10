
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'
import InputWithLabel from '../../components/forms/InputWithLabel'
import CustomButtons from '../../components/buttons/CustomButtons'
import PasswordInputWithLabel from '../../components/forms/PasswordInputWithLabel'
import {router} from 'expo-router'

const SignUp = () => {
  
  const [formState , setFormState] = useState({name : "",password : "",rPassword:""})


    
  return (
       <View style={styles.wrapper}  >
           <View style={styles.header}>
             <Text style={styles.title}>Let's Get </Text>
             <Text style={styles.title}>Started</Text>
           </View>
           <View style={styles.container}>
                <View style={styles.inputWrapper}>
                   <InputWithLabel label='UserName' placeholder='Jack...' value={formState.name} onChange={(text) => setFormState(oldState => {return {...oldState,name:text}})} />
                   <PasswordInputWithLabel label='Password' placeholder='******' value={formState.password} onChange={(text) => setFormState(oldState => {return {...oldState,password:text}})} />
                   <PasswordInputWithLabel label='Repait Password' placeholder='******' value={formState.rPassword} onChange={(text) => setFormState(oldState => {return {...oldState,rPassword:text}})} />
                </View>

                 <Text style={styles.linkText}>Already have an account?
                        <Text onPress={() => {router.back()}} style={styles.linkSubText}> Sign In</Text>
                 </Text>

                <CustomButtons buttonStyle={styles.button} labelStyle={{color:colors.background}} label='Sign Up' />
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
        paddingHorizontal:spaces.middle,height:"35%",justifyContent:"center",gap:spaces.small
      },
      title:{
         fontSize:fonts.highSize * 1.5 ,fontWeight:fonts.highWeight,color:colors.background
      },
      container : {
           position:"absolute",bottom:0,width:"100%",height:"65%",backgroundColor:colors.background,
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
