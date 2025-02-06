
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButtons = ({buttonStyle,labelStyle,label="",onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,buttonStyle]}>
      <Text style={[styles.label,labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default CustomButtons

const styles = StyleSheet.create({
    button : {
          width:"100%",height:40,backgroundColor:"rgb(171,171,171)",justifyContent:"center",alignItems:"center",borderRadius:12
    },
    label:{
        fontSize:17,fontWeight:"500",color:"white"
    }
})