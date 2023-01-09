import { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function TileDetailsScreen({route, navigation}) {
//this component gets the navigation prop because it is registered as a screen
//the route component is a result from any component that is registered as a screen
//https://reactnavigation.org/docs/route-prop/

 //if details in the route needs to be accessed in nested componets, the 'useRoute()' hook from @react-navigation/native
const paramDetailScreen = route.params.objectAsAParam;
//setOptions take an object as a parameter which will be set as options
//it is recomended to use this function on useEffect (userEffect runs after the component fuction was executed for the first time)
//or if you need to run the function simultaneously while the animations are happening one can use 'useLayoutEffect'
useLayoutEffect(()=>{
    navigation.setOptions({
        title: paramDetailScreen.title,
        headerRight: ()=>{
            return <Button title='Log Offer' onPress={logOfferHandler}/>
        }
    });
},[navigation]);

function logOfferHandler(){
    console.log('logging offer');
}
   
    return (
        <View style={styles.container}>
            <Text>Details screen - {JSON.stringify(paramDetailScreen)}</Text>
        </View>
    );
};

export default TileDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});