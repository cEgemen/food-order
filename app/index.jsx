import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, elevation, fonts, radius, spaces } from '../consdants/app_consts';
import { router, Stack } from 'expo-router';
import onBoard1 from "../assets/image/onBoard1.png"
import onBoard2 from "../assets/image/onBoard2.png"
import onBoard3 from "../assets/image/onBoard3.png"
import { useState } from 'react';
import SwipCircle from '../components/SwipCircle';

export default function App() {
  const onBoardPages = [{title : "Discover and Enjoy",description:"Discover the perfect meal for your taste with thousands of restaurants and delicious food options.",image:onBoard1,color:"rgb(189, 177, 117)"},{title:"Easy Ordering, Fast Delivery",description:"Place your order in seconds and wait for your food to be delivered quickly to your door.",image:onBoard2,color:"rgb(203, 159, 126)"},{title:"Exclusive Offers and Discounts",description:"Save more with exclusive offers and discounts from your favorite restaurants.",image:onBoard3,color:"rgb(151, 167, 111)"}]
  const swipperButtons = [
  {title:"Skip",press:() => {
       router.replace("/signIn")
  }},{title : "Previous",press : () => {
        setOnBoardState(onBoardState - 1)
  }},{title:"Next",press:()=>{
        setOnBoardState(onBoardState + 1)     
  }},{title:"Done",press:()=> {
         router.replace("/signIn")
  }}]

  const [onBoardState,setOnBoardState] = useState(0)
  const {title,description,image,color} = onBoardPages[onBoardState]
  
  let rightIndex;
  let leftIndex ;
  
  if(onBoardState === 0)
  {
      rightIndex = 2 ;leftIndex = 0
  }
  else if(onBoardState === onBoardPages.length - 1)
  {
     rightIndex = 3 ; leftIndex = 1 
  }
  else {
     rightIndex = 2 ; leftIndex = 1
  }
  
  return (
    <> 
        <Stack.Screen options={{headerShown:false}} />
        <View style= {[styles.wrapper,{backgroundColor:color}]}>
           <View style={styles.detailsWrapper}>
             <View style={[styles.afterDetailsWrapper]}>
                <Image style={styles.image} source={image} />
                <Text  style={styles.title}>{title}</Text>
                <Text  style={styles.description}>{description}</Text>
            </View>
           </View>
           
            <View style={styles.bottomSwiperWrapper}>
               <View style={styles.bottomSwiperContainer}>
                     <Text style={styles.bottomSwipperButton} onPress={swipperButtons[leftIndex].press} >{swipperButtons[leftIndex].title}</Text>
                     <SwipCircle size={onBoardPages.length} currentIndex={onBoardState} inActiveColor={colors.light_gray} activeColor={colors.background} />
                     <Text style={styles.bottomSwipperButton} onPress={swipperButtons[rightIndex].press} >{swipperButtons[rightIndex].title}</Text>
               </View>
            </View>        
        </View>
    </>
        
  );
}

const styles = StyleSheet.create({
      wrapper : {
          flex:1,justifyContent:"center",alignItems:"center"
      },
      detailsWrapper : {
          width:"90%",height:"60%",backgroundColor:"rgba(255,255,255,.15)",borderRadius:radius.middle,
      },
      afterDetailsWrapper : {
          flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"transparent",borderRadius:radius.middle
      },
      image : {
        width:"100%",height:"50%",resizeMode:"contain",marginBottom:spaces.high
      },
      title : {
         fontSize:fonts.highSize*1.25,fontWeight:fonts.highWeight,color:colors.background,marginBottom:spaces.middle,textAlign:"center" 
      },
      description : {
         fontSize:fonts.middleSize,fontWeight:fonts.smallWeight,color:colors.light_gray,padding:spaces.high,textAlign:"center" 
      },
      bottomSwiperWrapper : {
          width:"100%",height:80,backgroundColor:"rgba(255,255,255,.15)",position:"absolute",bottom:0
      },
      bottomSwiperContainer : {
          flex:1,flexDirection:"row",backgroundColor:"transparent",padding:spaces.small,justifyContent:"space-between",alignItems:"center"
      },
      bottomSwipperButton : {
           color:colors.text,backgroundColor:colors.light_gray,borderRadius:radius.small,width:80,padding:spaces.small,fontSize:fonts.smallSize,fontWeight:fonts.middleWeight,textAlign:"center"
      },
})

