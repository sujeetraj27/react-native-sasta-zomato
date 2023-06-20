import { AntDesign, Feather, FontAwesome, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function SignupScreen({navigation}) {
    const [namefocus, setNamefocus] = useState(false);
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwoedfocus, setPasswordfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);

    const [showpassword, setShowpassword] = useState(false);
    const [cshowpassword, setCshowpassword] = useState(false);
    const [cpasswoedfocus, setCpasswordfocus] = useState(false);
    return (
      <View style={styles.container}>
        <Text style={styles.head1}>Sign Up</Text>

        <View style={styles.inputout}>
          <AntDesign
            name="user"
            size={24}
            color={namefocus === true ? "red" : "#000"}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onFocus={() => {
                setNamefocus(true);
              setEmailfocus(false);
              setPasswordfocus(false);
              setCpasswordfocus(false);
            }}
          />
        </View>

        <View style={styles.inputout}>
          <Entypo
            name="email"
            size={24}
            color={emailfocus === true ? "red" : "#000"}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onFocus={() => {
              setEmailfocus(true);
              setPasswordfocus(false);
              setCpasswordfocus(false);
              setNamefocus(false);
            }}
          />
        </View>
        {/* phone number */}
        <View style={styles.inputout}>
          <Feather
            name="phone"
            size={24}
            color={phonefocus === true ? "red" : "#000"}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onFocus={() => {
              setEmailfocus(false);
              setPasswordfocus(false);
              setCpasswordfocus(false);
              setPhonefocus(true)
            }}
          />
        </View>
        {/* passwoed start */}
        <View style={styles.inputout}>
          <AntDesign
            name="lock"
            size={24}
            color={passwoedfocus === true ? "red" : "#000"}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onFocus={() => {
              setEmailfocus(false);
              setPasswordfocus(true);
              setCpasswordfocus(false);
              setPhonefocus(false)
            }}
            secureTextEntry={showpassword === false ? true : false}
          />
          <Feather
            name={showpassword == false ? "eye-off" : "eye"}
            size={24}
            color="black"
            onPress={() => {
              setShowpassword(!showpassword);
            }}
          />
        </View>
        {/* passwoed end */}

        {/* cpasswoed start */}
        <View style={styles.inputout}>
          <AntDesign
            name="lock"
            size={24}
            color={cpasswoedfocus === true ? "red" : "#000"}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onFocus={() => {
              setEmailfocus(false);
              setPasswordfocus(false);
              setCpasswordfocus(true);
            }}
            secureTextEntry={cshowpassword === false ? true : false}
          />
          <Feather
            name={cshowpassword == false ? "eye-off" : "eye"}
            size={24}
            color="black"
            onPress={() => {
              setCshowpassword(!cshowpassword);
            }}
          />
        </View>
        {/* passwoed end */}
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
  
        <Text style={styles.forgot}>Forgot Paasword?</Text>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Sign In With</Text>
  
        <View style={styles.gf}>
          <TouchableOpacity>
            <View style={styles.gficon}>
              <AntDesign name="google" size={24} color="#EA4335" />
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <View style={styles.gficon}>
              <FontAwesome name="facebook" size={24} color="#4267B2" />
            </View>
          </TouchableOpacity>
        </View>
        <View  style = {styles.lineStyle}/>
        <Text style={styles.signup}>Already have an account?
          <Text style={{color:'red'}} onPress={()=> navigation.navigate('login')}>  Sign In</Text>
        </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
    //   justifyContent: "center",
    marginTop:30,
    },
    head1: {
      fontSize: 30,
      color: "red",
      textAlign: "center",
      marginVertical: 10,
    },
    inputout: {
      flexDirection: "row",
      width: "80%",
      marginVertical: 10,
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: 5,
      paddingVertical: 5,
      alignSelf: "center",
      elevation: 20,
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: "80%",
    },
    btn1: {
      width: "80%",
      height: 40,
      backgroundColor: "red",
      borderRadius: 10,
      alignItem: "center",
      justifyContent: "center",
      elevation: 10,
      colors: "white",
    },
    btntext: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    forgot: {
      color: "grey",
      marginTop: 20,
      marginBottom: 10,
    },
    or: {
      color: "red",
      marginVertical: 10,
      fontWeight: "bold",
      marginBottom: 5,
    },
    gftxt: {
      color: "grey",
      marginVertical: 5,
      fontSize: 25,
    },
    gf: {
      flexDirection: "row",
    },
    gficon: {
      backgroundColor: "#fff",
      width: 50,
      margin: 10,
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
      elevation: 20,
    },
    lineStyle:{
      backgroundColor: 'grey',
      height: 1,
      width: '80%',
      marginVertical:10
  },
  signup:{
      color:'grey'
  }
  
  })

export default SignupScreen