import { StyleSheet, View, Text, StatusBar, TextInput } from "react-native";
import React from "react";
import HomeHeadNav from "../components/HomeHeadNav";
import Categories from "../components/Categories";
import OfferSlider from "../components/OfferSlider";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <HomeHeadNav />
      <View style={styles.searchbox}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
        />
        <TextInput placeholder="search" style={styles.input} />
      </View>

      <Categories />
      <OfferSlider />
      {/* <Text>HomeScreen</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    width:'100%',
  },
  searchbox:{
    flexDirection:'row',
    width:'90%',
    backgroundColor:'#fff',
    borderRadius:30,
    alignItems:'center',
    padding:10,
    margin:20,
    elevation:10,
  },
  input:{
    marginLeft:10,
    fontSize:20,
    width:'90%',
    color:'#000'
  }
});
