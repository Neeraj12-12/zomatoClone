import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import EachResturantColumn from "./EachResturantColumn";
import EachResturantCard from "./EachResturantCard";

const AllResturantList = () => {
  const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [fetchedData,setFetchedData] = useState([])



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

  return (
    <View>
     {fetchedData.length >0 && <FlatList
        data={fetchedData}
        renderItem={(item) => <EachResturantCard data={item} />}
        keyExtractor={(_,index) => index}
      />}
    </View>
  );
};

export default AllResturantList;
