import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from '@expo/vector-icons/Feather';const SearchBox = () => {
  return (
    <View>
      <View
        style={{
         shadowColor: "white",
          borderRadius: 10,
          borderColor: "black",
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderStyle: "solid",
          backgroundColor: "white",
        }}
      >
        <View style={{display: "flex" ,justifyContent: "space-between" , flexDirection : "row" ,alignItems:"center"}}>
          <FontAwesome name="search" size={20} color="green" />
          <View style={{flexGrow:1,marginLeft: 5, borderRightWidth: 1, marginHorizontal:5, paddingVertical:5}}>
          <Text style={{color:"gray"}}>Search Resturant...</Text>
          </View>
          <Feather name="mic" size={20} color="green" />
        </View>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({});
