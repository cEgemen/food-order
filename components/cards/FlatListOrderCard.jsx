
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime';
import { colors, elevation, fonts, radius, spaces } from '../../consdants/app_consts'

dayjs.extend(relativeTime)

const FlatListOrderCard = ({order,onPress,cardStyle={}}) => {
     
    return (
    <Pressable style={[styles.wrapper,cardStyle]} onPress={onPress}>
        <View style={styles.detailsWrapper}>
            <Text style={styles.topDetailsText}>🔪 Order #{order.id}</Text>
            <Text style={styles.topDetailsText}>{order.status}</Text>
        </View>
        <View style={styles.detailsWrapper}>
            <Text style={styles.bottomDetailsText}>⌛ {dayjs(order.created_at).fromNow()}</Text>
            <Text style={[styles.bottomDetailsText,{color:colors.secondary}]}>{order.total} $</Text>
        </View>
    </Pressable>
  )
}

export default FlatListOrderCard

const styles = StyleSheet.create({
     wrapper : {
        width:"100%",padding:spaces.small,backgroundColor:colors.light_gray,gap:spaces.middle,borderRadius:radius.middle,
        elevation:elevation.small
     },
     detailsWrapper:{
        flexDirection:"row",alignItems:"center",justifyContent:"space-between"
     },
     topDetailsText : {
       fontSize:fonts.smallSize,fontWeight:fonts.middleWeight
     },
     bottomDetailsText : {
       fontSize:fonts.smallSize,fontWeight:fonts.smallWeight
     }
})