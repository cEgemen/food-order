
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../consdants/app_consts'

const TabPressableIcon = ({colorss,focused,icon,text}) => {
  
    return (
    <TouchableOpacity  style={styles.button} >
        <Image source={icon} style={[styles.icon,{tintColor:focused ? colors.secondary : colors.gray}]} />
        <Text style={[styles.label,{color:focused ? colors.secondary : colors.gray}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default TabPressableIcon

const styles = StyleSheet.create({
    button : {
        flex:1,justifyContent:"center",alignItems:"center"
    },
    icon : {
        width:30,height:30,resizeMode:"contain"
    },
    label : {
        
    }
})