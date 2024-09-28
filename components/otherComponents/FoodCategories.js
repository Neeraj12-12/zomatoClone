import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import EachResturantColumn from "./EachResturantColumn";
import EachFoodCard from "./EachFoodCard";

const FoodCategories = () => {
  const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [fetchedData,setFetchedData] = useState([])
  const [groupedData, setGroupedData] = useState([]);


  useEffect(()=> {
    
  const startFetch = async() =>
  {
         try {
            let response = await fetch("https://fakestoreapi.com/products");
            let data = await  response.json();
            
             setFetchedData(data);
         } catch (error) {
             console.log("something went wrong in fetching")
         }
  }
  startFetch();
  },[])

  useEffect(() => {
    let tempGroupedData =[];
    for (let i = 0; i < fetchedData.length; i += 2) {
      tempGroupedData.push({ first: fetchedData[i], second: fetchedData[i+1]});
    }
      setGroupedData(tempGroupedData)
  }, [fetchedData]);
  return (
    <View>
     {groupedData.length >0 && <FlatList
        data={groupedData}
        renderItem={(item) => <EachFoodCard data={item} />}
        keyExtractor={(_,index) => index}
        horizontal
      />}
    </View>
  );
};

export default FoodCategories;
