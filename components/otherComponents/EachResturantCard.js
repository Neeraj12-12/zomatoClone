import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Svg, Polygon } from "react-native-svg";
import { TouchableOpacity } from "react-native";

const EachResturantCard = ({ data }) => {
  const { width } = Dimensions.get("window");
  const height = 100;
  const points = `
    0,0
    ${width * 0.3},0 
    ${width * 0.35},${height * 0.1} 
    ${width},${height * 0.1} 
    ${width},${height} 
    0,${height}
  `;
  const eachData = data.item;
  console.log(eachData);
  return (
    <TouchableOpacity style={{ marginVertical: 10,
        marginHorizontal:2,
        shadowColor: '#fff', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        
        elevation: 5}}>
      <View
        style={{
          borderRadius: 20,
          overflow: "hidden",
          shadowColor: "white",
          backgroundColor: "white",
        }}
      >
        <Image
          style={{ width: "100%", height: 200, resizeMode: "stretch" }}
          source={{ uri: eachData.image }}
        />

        <Svg height="100" width="100%">
          <Polygon points={points} fill="lightgray" />
          <View style={{marginHorizontal:8, overflow:"hidden"}}>
            <View >
              <Text style={{overflow: "hidden"}}>{eachData.description.split(' ')[0]}</Text>
            </View>
            <View >
              <Text style={{overflow: "hidden" , fontSize: 30}}>{eachData.title.split(' ')[0] } </Text>
            </View>
            <View >
              <Text style={{overflow: "hidden" }}>{eachData.category+ " | " +"price-$" + eachData.price }</Text>
            </View>
            
            <View >
              <Text style={{overflow: "hidden" }}>{ "count-"+eachData.rating.count+ " | " +"rate-" + eachData.rating.rate }</Text>
            </View>
            
          </View>
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

export default EachResturantCard;
