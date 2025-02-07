
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts, radius } from '../../consdants/app_consts'

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
          width:"100%",height:40,backgroundColor:colors.light_gray,justifyContent:"center",alignItems:"center",borderRadius:radius.middle
    },
    label:{
        fontSize:fonts.middleSize,fontWeight:fonts.middleWeight,color:colors.background
    }
})