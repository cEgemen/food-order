
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import oEyeIcon from "../../assets/icons/open_eye.png"
import cEyeIcon from "../../assets/icons/close_eye.png"

import InputWithLabel from './InputWithLabel'
import { colors, spaces } from '../../consdants/app_consts'

const PasswordInputWithLabel = ({label="",placeholder="",value="",onChange=(text) => {},endEditing=() => {},containerStyle={},labelStyle={},inputStyle={},errors=[],keyboardType="numeric"}) => {
  const [securState , setSecurState] = useState(true)
  const onChangeSecur = () => {
       setSecurState(oldState => {
         const lastState = oldState;  
         return !lastState;
       })
  }
  const isError = errors.length > 0;
  return (
    <>
        <Pressable style={[styles.imageWrapper,{bottom:isError ? spaces.middle*4 : spaces.middle*1.5 }]} onPress={onChangeSecur}>
           <Image style={styles.image} source={securState ? oEyeIcon : cEyeIcon} /> 
        </Pressable>
        <InputWithLabel keyboardType={keyboardType} label={label} placeholder={placeholder} value={value} onChange={onChange} containerStyle={containerStyle} labelStyle={labelStyle} inputStyle={{...inputStyle,paddingRight:spaces.high*2}} errors={errors} secureTextEntry={securState} endEditing={endEditing} />
    </>
  )
}

export default PasswordInputWithLabel

const styles = StyleSheet.create({
     imageWrapper : {
       position:"absolute",right: spaces.small,zIndex:4
     },
     image : {
       width:30,height:30,resizeMode:"contain",tintColor:colors.dark_gray
     },
})