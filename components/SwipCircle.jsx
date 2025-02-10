
import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors, radius, spaces } from '../consdants/app_consts'
import * as Crypto from "expo-crypto"

const SwipCircle = ({size,currentIndex=0,activeColor="white",inActiveColor="black"}) => {
  const emptyList = new Array(size)  

  return (
    <FlatList
        data={emptyList}
        horizontal
        contentContainerStyle={{gap:spaces.middle,flex:1,justifyContent:"center"}}
        keyExtractor={(item,index) => Crypto.randomUUID()}
        renderItem={({item,index}) => {
              return <View style={[styles.circle,{width:currentIndex === index ? 75 : 25,backgroundColor:currentIndex === index ? activeColor : inActiveColor}]}></View>
        }}
     />
    
  )
}

export default SwipCircle

const styles = StyleSheet.create({
     circle : {
          backgroundColor:colors.background,width:25,height:25,borderRadius:radius.circle(25)
     }
})