import { View, Text, Image } from 'react-native'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <View style={{width:"100%" , height:400, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, overflow: "hidden"}}> 
     <Image  style={{width: "100%",  overflow: "hidden" ,resizeMode: "stretch"}}source={require("../../assets/banner2.jpg")}/>
    </View>
  )
}

export default WelcomeBanner