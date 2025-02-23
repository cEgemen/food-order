import { Pressable, StyleSheet, Text } from "react-native"
import { colors, radius } from "../../consdants/app_consts"

export default ({text="",isActive=false,onPress=()=>{}}) => {
    const color = isActive ? colors.background : colors.secondary
    const backgroundColor = isActive ? colors.secondary : colors.background
    const borderColor = isActive ? colors.background : colors.secondary 
    return <>
              <Pressable style={[styles.container,{backgroundColor,borderColor,borderWidth:1}]} onPress={onPress}>
                <Text style={[styles.text,{color}]}>
                    {text}
                </Text>
              </Pressable>
           </>
}

const styles = StyleSheet.create({
     container : {
          width:90,height:45,borderRadius:radius.small,justifyContent:"center",alignItems:"center"
     },
     text : {

     }
})