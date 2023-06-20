import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/RootNavigation';
import LoginScreen from './src/screen/LoginScreen';
import WelcomeScreen from './src/screen/WelcomeScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //    <WelcomeScreen /> 
    //   <LoginScreen />
    // </View>
    <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
