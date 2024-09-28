import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SearchBox from "../otherComponents/SearchBox";
import WelcomeBanner from "../otherComponents/WelcomeBanner";
import LocationBar from "../otherComponents/LocationBar";
import RecommendedResturant from "../otherComponents/RecommendedResturant";
import SeparatorWithText from "../otherComponents/SeparatorWithText";
import FoodCategories from "../otherComponents/FoodCategories";
import AllResturantList from "../otherComponents/AllResturantList";

const Home = () => {
  return (
    <ScrollView>
      <WelcomeBanner />
      <View style={{ position: "absolute", width: "100%" }}>
        <View
          style={{
            display: "flex",
            paddingHorizontal: 16,
            position: "absolute",
            zIndex: "2",
            top: 50,
            width: "100%",
          }}
        >
          <View >
            <View style={{paddingVertical:10}}>
              <LocationBar />
            </View>
            <SearchBox />
          </View>
        </View>
       
     
      </View>
      <SeparatorWithText text={"Recommended"}/> 
      <View style={{marginVertical:16}}>
        <RecommendedResturant />
     </View>
     <SeparatorWithText text={"WHAT'S ON YOUR MIND"}/> 
     <View style={{marginVertical:16}}>
        <FoodCategories />
     </View>
     <SeparatorWithText text={"All RESTURANTS"}/> 
     <View style={{margin:16}}>
        <AllResturantList />
     </View>
    </ScrollView>
  );
};

export default Home;
