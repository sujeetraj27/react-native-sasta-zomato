import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.text}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="noodles"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.text}>Noodles</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="coffee"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.text}>Coffee</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome
            name="birthday-cake"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.text}>Cake</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="food-turkey"
            size={24}
            color="black"
            style={styles.myicon}
          />
          <Text style={styles.text}>Chicken</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "90%",
    elevation: 10,
    borderRadius: 10,
  },
  head: {
    color: "red",
    fontSize: 25,
    fontWeight: "300",
    margin: 10,
    alignSelf: "center",
    paddingBottom: 5,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  box: {
    backgroundColor: "#fff",
    elevation: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  myicon: {
    marginRight: 10,
    color: "#000",
  },
  text: {
    color: "#000",
  },
});
