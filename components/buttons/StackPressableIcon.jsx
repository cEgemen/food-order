
import {Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../consdants/app_consts'

const StackPressableIcon = ({icon,onPress}) => {
  return (
    <TouchableOpacity  style={styles.button} onPress={onPress}>
        <Image source={icon}  style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
     button : {
         
     },
     icon : {
         width:30,height:30,resizeMode:"contain" , tintColor:colors.secondary
     }
})

export default StackPressableIcon