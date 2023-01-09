import React from "react";
import { createDrawerNavigator,DrawerToggleButton } from '@react-navigation/drawer';
import HomeScreen from "../screens/HomeScreen";
import Favourites from "../screens/Favourites"; 
import BottomTapNavigator from "./BottomTapNavigator";
import routes from "../constants/routes";
import CustomDrawer from "../components/HelperComponents/CustomDrawer";
const Drawer = createDrawerNavigator();

function ProfileNavigator() {
  return (
    <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props}/>}
        screenOptions={{
            headerStyle: {backgroundColor:'#081e36'},
            headerTintColor: 'white',
            headerShown:true,
            headerLeft: false,
            headerRight: () => <DrawerToggleButton />
        }}
        >
      <Drawer.Screen name={routes.BOTTOM_TAP_NAVIGATOR} component={BottomTapNavigator} />
      <Drawer.Screen name={routes.HOME} component={HomeScreen} />
      <Drawer.Screen name={routes.FAVOURITES} component={Favourites} />
    </Drawer.Navigator>
  );
}
export default ProfileNavigator;