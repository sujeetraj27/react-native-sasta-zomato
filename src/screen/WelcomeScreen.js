import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo1.png'
import { colors, hr80 } from '../global/style';

 const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to foodies</Text>
        <View style={styles.logoout}>
            <Image source={logo} style={styles.logo}/>
        </View>
        <View  style = {styles.lineStyle}/>
        <Text style={styles.text}>Find the best food around you at lowest price:</Text>
         <View  style = {styles.lineStyle}/>

         <View style={styles.btnout}>
            <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
                <Text style={styles.btn}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('login')}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
         </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff4242',
        width:'100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        fontSize:50,
        color: colors.col1,
        textAlign:'center',
        marginVertical:10,
        fontWeight:'200'
    },
    logoout:{
        width:'70%',
        height:"30%",
        alignItems:'center'
    },
    logo:{
        width:'100%',
        height:"100%"
    },
    text:{
        fontSize:20,
        width:'80%',
        color:'white',
        textAlign:'center'
    },
    lineStyle:{
        backgroundColor: 'white',
        height: 1,
        width: '80%',
        marginVertical:20
   },
   btnout:{
    flexDirection:'row'
   },
   btn:{
    fontSize:20,
    color:'red',
    textAlign:'center',
    marginVertical:30,
    marginHorizontal:10,
    fontWeight:'700',
    backgroundColor:'#fff',
    borderRadius:10,
    padding:10,
    paddingHorizontal:20
   }
})
export default WelcomeScreen;