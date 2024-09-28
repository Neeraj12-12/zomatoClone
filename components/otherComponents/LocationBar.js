import { View, Text } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
const LocationBar = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{display:"flex" , flexDirection: "row" , justifyContent:"center" , alignItems: "center"}}>
        <Entypo name="location-pin" size={35} color="white" />
        <View>
            <Text style={{color: "white" , fontSize: 20, fontWeight: "bold"}}>Home</Text>
            <Text style={{color: "white"}}>some, randow, Address</Text>
        </View>
      </View>
      <View style={{display:"flex" , justifyContent: 'center' , alignItems: "center"}}>
      <View style={{width:40 ,height: 40, borderRadius: 20 , backgroundColor: "white", justifyContent: "center" ,alignItems: "center"}}>
        <Text style={{color: "green" , fontSize: "20"}}>N</Text>
      </View>
      </View>
    </View>
  );
};

export default LocationBar;
