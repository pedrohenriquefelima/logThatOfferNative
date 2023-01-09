import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importing screens
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';

//settings and nested navigations
import routes from '../constants/routes';
import SettingsNavigator from './SettingsNavigator';

//icons
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTapNavigator() {
  return (
    <Tab.Navigator screenOptions={({route})=>({
        headerShown:false,
        tabBarShowLabel: false,
        tabBarActiveTintColor:'#081e36',
        tabBarIcon: ({color, size, focused}) => {
            let iconName;

            if(route.name == routes.HOME_BOTTOM_MENU){
                iconName = focused ? 'ios-home-sharp' : 'ios-home-outline'
            } else if (route.name == routes.SETTINGS_NAVIGATOR){
                iconName = focused ? 'settings' : 'settings-outline'
            } else if (route.name == routes.NOTIFICATIONS){
                iconName = focused ? 'md-notifications-sharp' : 'md-notifications-outline';
            }

            return <Ionicons name={iconName} size={22} color={color} />
        }
    })}>
      <Tab.Screen name={routes.NOTIFICATIONS} component={NotificationScreen} />
      <Tab.Screen name={routes.HOME_BOTTOM_MENU} component={HomeScreen}/>
      <Tab.Screen name={routes.SETTINGS_NAVIGATOR} component={SettingsNavigator}/>
    </Tab.Navigator>
  );
}

export default BottomTapNavigator;