import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeadNav from "../components/HomeHeadNav";
import Categories from "../components/Categories";
import OfferSlider from "../components/OfferSlider";
import { AntDesign } from "@expo/vector-icons";

import firestore from "@react-native-firebase/firestore";
import CardSlider from "../components/CardSlider";

export default function HomeScreen() {
  const [foodData, setFoodData] = useState([]);
  const foodRef = firestore().collection("FoodData");
  const [vegData, setVegDAta] = useState([]);
  const [nonVegData, setNonVegDAta] = useState([]);
  const [search, setSearch] = useState("");

  // console.log(search);

  useEffect(() => {
    foodRef.onSnapshot((snapshot) => {
      setFoodData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    setVegDAta(foodData.filter((item) => item.foodType == "veg"));
    setNonVegDAta(foodData.filter((item) => item.foodType == "non-veg"));
  }, [foodData]);

  // console.log(nonVegData)
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav />
        <View style={styles.searchbox}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            placeholder="search"
            style={styles.input}
            onChangeText={(text) => {
              setSearch(text);
            }}
          />
        </View>
        {search != "" && (
          <View style={styles.searchresultouter}>
            <FlatList
              style={styles.searchresultinner}
              data={foodData}
              renderItem={({ item }) => {
                if (item.foodName.toLowerCase().includes(search.toLocaleLowerCase())) {
                  return (
                    <View style={styles.searchresult}>
                      <AntDesign name="arrowright" size={24} color="black" />
                      <Text style={styles.searchresulttext}>
                        {item.foodName}
                      </Text>
                    </View>
                  );
                }
              }}
            />
          </View>
        )}
        <Categories />
        <OfferSlider />
        {/* <Text>HomeScreen</Text> */}
        <CardSlider title={"Today's Special"} data={foodData} />
        <CardSlider title={"NonVeg-Love"} data={nonVegData} />
        <CardSlider title={"Veg HUnger"} data={vegData} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  searchbox: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    fontSize: 20,
    width: "90%",
    color: "#000",
  },
  searchresultouter:{
    width:'100%',
    marginHorizontal:30,
    height:'50%',
    backgroundColor:'#fff'
  },
  searchresultinner:{
    width:'100%',
  },
  searchresult:{
    width:'90%',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    marginLeft:20
  },
  searchresulttext:{
    marginLeft:10,
    fontSize:18,
    color:'red'
  }
});
