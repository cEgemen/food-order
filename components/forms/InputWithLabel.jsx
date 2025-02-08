
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts, radius, spaces } from '../../consdants/app_consts'

const InputWithLabel = ({label="",placeholder="",value="",onChange=(text) => {},containerStyle={},labelStyle={},inputStyle={},keyboardType="default",errors=[],secureTextEntry=false}) => {

  return (
     <View style={[styles.inputWrapper,containerStyle]}>
                <Text style={[styles.inputLabel,labelStyle]}>{label}</Text>
                <TextInput style={[styles.input,inputStyle,{borderColor:errors.length !== 0 ? "red" : colors.dark_gray , borderWidth:errors.length !== 0 ? 1 : 0}]} keyboardType={keyboardType} placeholder={placeholder} value={value}  onChangeText={text => onChange(text) } secureTextEntry={secureTextEntry} numberOfLines={1} />  
                {
                 errors.length > 0 ? 
                 <Text style={styles.error}>{errors[0]}</Text>
                                   :
                 null                  
                }
     </View>
  )
}

export default InputWithLabel

const styles = StyleSheet.create({
    inputWrapper : {
        marginVertical:spaces.middle,gap:spaces.small
     },
     inputLabel : {
        fontSize:fonts.smallSize,fontWeight:fonts.smallWeight
     },
     input : {
         backgroundColor:colors.light_gray,borderRadius:radius.middle
     },
     error : {
        fontSize:fonts.smallSize,fontWeight:fonts.smallWeight,color:"red"
     }
})