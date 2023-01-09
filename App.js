import { StyleSheet, Button } from 'react-native';
//react navigation - component based library
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AuthNavigator from './navigation/AuthNavigatior';
import { NavigationContainer } from '@react-navigation/native';
/**
 * Step 1 - Surroung component by NavigationContainer
 * Step 2 - install the type of navigator you wanna use
 * 
 */
//custom components
// import HomeScreen from './screens/HomeScreen';
// import TileDetailsScreen from './screens/TileDetailsScreen';
// import WelcomeScreen from './screens/WelcomeScreen';
// import SignInScreen from './screens/SignInScreen';

export default function App() {
  
  //stack is an object with two properties, every prop holds an object that acts as a component
  // const Stack = createNativeStackNavigator();
  
  return (
   <>
     <NavigationContainer>
      <StatusBar style="light"/>
      <AuthNavigator/>
     </NavigationContainer>
    </>
  );
}
/** 
 * an example of a stysheet object
 * an advantage of using the stylesheet.create is that it provides validation. 
 * If you would use invalid styles properties or values, you would get an error/warning. 
**/
const styles = StyleSheet.create({

})
;
