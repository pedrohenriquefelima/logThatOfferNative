import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from '../constants/routes';


//custom components
import SettingScreen from '../screens/SettingsScreen';
import SeettingDetailScreen from '../screens/SeettingDetailScreen';


function SettingsNavigator(){
    const Stack = createNativeStackNavigator();
    console.log(Stack);
    console.log('hello');
    console.log(ROUTES);
    return (
        <Stack.Navigator>
          <Stack.Screen name={ROUTES.SETTINGS} component={SettingScreen} options={{title:'Settings', headerShown: false}}/>
          <Stack.Screen name={ROUTES.SETTINGS_DETAILS} component={SeettingDetailScreen}/>
        </Stack.Navigator>
    )

}
export default SettingsNavigator;