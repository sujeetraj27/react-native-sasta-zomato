import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

// const carouseldata = [
//   {
//     id:1,
//     image: '../../assets/sliderimage/fastfood.jpg',
//   },
//   {
//     id:2,
//     image: '../../assets/sliderimage/fastfood1.jpg',
//   },
//   {
//     id:3,
//     image: '../../assets/sliderimage/fastfood2.jpg',
//   }
// ]

const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offerslider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}>
          <View style={styles.slide}>
            <Image source={require("../../assets/sliderimage/fastfood4.jpg")} style={styles.image}/>
          </View>
          <View style={styles.slide}>
            <Image source={require("../../assets/sliderimage/fastfood1.jpg")} style={styles.image}/>
          </View>
          <View style={styles.slide}>
            <Image source={require("../../assets/sliderimage/fastfood2.jpg")} style={styles.image}/>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  offerslider:{
    width:'100%',
    height:200,
    backgroundColor:'#fff',
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
  },
  slide:{
    width:'100%',
    height:200,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:20,
  }
});
