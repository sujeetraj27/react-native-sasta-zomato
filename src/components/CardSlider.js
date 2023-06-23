import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CardSlider({ title, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cardouthead}>{title}</Text>

      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
        style={styles.cardout}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.s1}>
              <Image
                source={{
                  uri: item.foodImageUrl,
                }}
                style={styles.cardimgon}
              />
            </View>

            <View style={styles.s2}>
              <Text style={styles.text1}>{item.foodName}</Text>
              <View style={styles.s2in}>
                <Text style={styles.text2}>Rs.{item.foodPrice}/-</Text>
                {item.foodType == "veg" ? (
                  <Text style={styles.vegcol}></Text>
                ) : (
                  <Text style={styles.nonvegcol}></Text>
                )}
              </View>
            </View>
            <View style={styles.s3}>
                <Text style={styles.buybtn}>Buy</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    vegcol:{
        color:'green',
        width:20,
        height:20,
        borderRadius:50,
        backgroundColor:'green',
        marginVertical:10
    },
    nonvegcol:{
        color:'red',
        width:20,
        height:20,
        borderRadius:50,
        backgroundColor:'red',
        marginVertical:10
    },
    container:{
        marginVertical:20,
        flex:1,
        backgroundColor:'#fff',
        width:'100%'
    },
    cardouthead:{
        color:'#000',
        width:'90%',
         fontSize:30,
         fontWeight:'200',
         borderRadius:10,
         marginHorizontal:10,
    },
    cardout:{
        width:'100%',
        // backgroundColor:'red'
    },
    card:{
        // backgroundColor:'aqua',
        width:300,
        height:300,
        margin:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#e8e8e8',
        backgroundColor:'#fff'
    },
    cardimgon:{
        width:'100%',
        height:200,
        borderRadius:10,
    },
    s2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    text1:{
        fontSize:20,
        color:'#000',
        marginHorizontal:5,
        width:150
    },
    text2:{
        fontSize:20,
        color:'grey',
        marginRight:10
    },
    s2in:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
    },
    s3:{
        alignItems:'center',
        position:'absolute',
        bottom:1,
        width:'100%'
    },
    buybtn:{
        backgroundColor:'red',
        color:'#fff',
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:20,
        borderRadius:10,
        width:'90%',
        textAlign:'center',
        marginVertical:10
    }

});
