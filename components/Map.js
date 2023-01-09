import React, {useState,useEffect} from 'react';
// Import required components
import {StyleSheet, View, Text} from 'react-native';
// Import React Map
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
function Map() {

const [location, setLocation] = useState(
  {latitude: 0,
  longitude: 0,
  latitudeDelta: 0.015,
  longitudeDelta:0.015});


useEffect(() => {
  (async () => {
    
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let tempLoc = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: tempLoc.coords.latitude,
      longitude: tempLoc.coords.longitude,
      latitudeDelta:0.015,
      longitudeDelta:0.015
    });
    console.log('getCurrentPositionAsync: ' + JSON.stringify(tempLoc));
    console.log('getLocation: ' + JSON.stringify(location));
  })();
}, []);

function zoomInHandler(){
  console.log('zooming in');
  setLocation({
    ...location,
    latitudeDelta:0.005,
    longitudeDelta:0.005
  });
  console.log('zoomedIn: ' + JSON.stringify(location));
}

function zoomOutHandler(){
  console.log('zooming out');
  setLocation({
    ...location,
    latitudeDelta:0.020,
    longitudeDelta:0.020
  });
  console.log('zoomedOut: ' + JSON.stringify(location));
}

return (
  <View style={styles.container}>
    <View style={styles.containermap}>
      {location.latitude != 0 && <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        userInterfaceStyle="light"
        style={styles.map}
        region={location}
        zoomEnabled={true}
        initialRegion={location}
      />}
    </View>
    <View>
      <Text styles={styles.zoominText} onPress={zoomInHandler}>Zoom in</Text>
    </View>
    <View>
      <Text styles={styles.zoominText} onPress={zoomOutHandler}>Zoom out</Text>
    </View>
  </View>
  );
};
export default Map;



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containermap: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});