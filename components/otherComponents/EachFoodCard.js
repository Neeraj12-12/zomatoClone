import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const  EachFoodCard= ({ data }) => {
 
  return (
    <View>
     {data.item.first && <TouchableOpacity style={styles.mainContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image } source={{uri:data.item.first.image}}/>
        </View>
        <View>
          <Text style={styles.titleText}>{data.item.first.title.split(' ')[0]}</Text>
        </View>
      </TouchableOpacity>}
    {data.item.second &&  <TouchableOpacity style={styles.mainContainer}>
        <View style={styles.imageContainer}>
            <Image style ={styles.image} source={{uri:data.item.second.image}}/>
        </View>
        <View>
          <Text t style={styles.titleText}>{data.item.second.title.split(' ')[0]}</Text>
        </View>
      </TouchableOpacity>}
    </View>
  );
};

export default EachFoodCard;


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: "stretch",
        overflow: "hidden",
        borderRadius: 50
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        width: 150,
        height: 100
        ,borderRadius: 20,
        overflow:"hidden"
    },
    titleText:{
        overflow:"hidden"
    },
    mainContainer:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        width: 150,
        height: 120 ,
        overflow: "hidden",
        margin: 16
    }
});
