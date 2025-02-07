import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { colors, spaces } from '../consdants/app_consts'
import ModalCard from '../components/cards/ModalCard'
import { productContext } from '../managment/productContext'
import * as Crypto from "expo-crypto"

const Card = () => {
    
    const {productCardState} = useContext(productContext)

    return (
      <>
          <FlatList 
          style = {styles.wrapper}
          contentContainerStyle = {styles.content}
          data={productCardState}
          keyExtractor={(item) => Crypto.randomUUID()}
          renderItem={({item}) => {
                 return <>
                             <ModalCard product={item}  />
                        </>
                                   }       }
          />
          
      </>
    

  )
}

export default Card

const styles = StyleSheet.create({
      wrapper : {
          flex:1,backgroundColor:colors.background,padding:spaces.middle
      },
      content : {
          gap:spaces.middle
      }
})