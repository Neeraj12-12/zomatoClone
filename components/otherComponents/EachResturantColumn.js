import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const EachResturantColumn = ({ data }) => {
  return (
    <View>
     {data.item.first && <TouchableOpacity style={styles.mainContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image } source={{uri:data.item.first.image}}/>
        </View>
        <View>
          <Text style={styles.titleText}>{data.item.first.title}</Text>
        </View>
      </TouchableOpacity>}
    {data.item.second &&  <TouchableOpacity style={styles.mainContainer}>
        <View style={styles.imageContainer}>
            <Image style ={styles.image} source={{uri:data.item.second.image}}/>
        </View>
        <View>
          <Text t style={styles.titleText}>{data.item.second.title}</Text>
        </View>
      </TouchableOpacity>}
    </View>
  );
};

export default EachResturantColumn;


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        resizeMode: "stretch",
        overflow: "hidden"
    },
    imageContainer: {
        width: 150,
        height: 100
        ,borderRadius: 20,
        overflow:"hidden"
    },
    titleText:{
        overflow:"hidden"
    },
    mainContainer:{
        width: 150,
        height: 120 ,
        overflow: "hidden",
        margin: 16
    }
});
