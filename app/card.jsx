import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../assets/datas/products'
import { colors, spaces } from '../consdants/app_consts'
import ModalCard from '../components/cards/ModalCard'

const Card = () => {
  
    return (
      <>
          <FlatList 
          style = {styles.wrapper}
          contentContainerStyle = {styles.content}
          data={products}
          keyExtractor={(item) => item.id }
          renderItem={({item}) => {
                 return <>
                             <ModalCard product={item} key={item.id} />
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