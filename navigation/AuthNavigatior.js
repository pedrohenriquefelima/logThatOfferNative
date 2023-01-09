import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ROUTES from '../constants/routes';

//bottom tap navigator
//import BottomTapNavigator from './BottomTapNavigator';
import ProfileNavigator from './ProfileNavigator';

//custom components
import HomeScreen from '../screens/HomeScreen';
import TileDetailsScreen from '../screens/TileDetailsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';

function AuthNavigator(){
    const Stack = createNativeStackNavigator();
    console.log(Stack);
    console.log('hello');
    console.log(ROUTES);
    return (
      
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#081e36'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#c5def8'}
        }}>
          <Stack.Screen name={ROUTES.WELCOME} component={WelcomeScreen} options={{title:'welcome'}}/>
          <Stack.Screen name={ROUTES.SIGNIN} component={SignInScreen} options={{contentStyle:{backgroundColor: 'red'}}}/>
          <Stack.Screen name={ROUTES.DETAILS} component={TileDetailsScreen}/>
          <Stack.Screen name={ROUTES.PROFILE_NAVIGATOR} component={ProfileNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    )

}
export default AuthNavigator;