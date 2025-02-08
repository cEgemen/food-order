
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListOrderProductCard = ({order}) => {
  return (
    <View>
      <Text>{order.name}</Text>
    </View>
  )
}

export default FlatListOrderProductCard

const styles = StyleSheet.create({})