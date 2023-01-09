import { Pressable, View,Text,StyleSheet,Platform, Image } from "react-native";
/**
 * The 'onPressChild' is a function being passed
 * Whenever the onPress gets fired, the function received on the OnPress will get called
 * @param {*} onPressChild 
 * @returns 
 */

function MarkerPointTile({onPressParent}){
    return (
    <View style={styles.containerTile}>
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [styles.tile, pressed ? styles.tilePressed : null]} onPress={onPressParent}>
          <View>
            <Text style={styles.title}>Coop</Text>
          </View>
        </Pressable>
        <View style={styles.imageContainer}>
            <Image source={{uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/03/09/coop.jpg?width=1200'}} style={styles.image}/>
        </View>
    </View>
    );
}
export default MarkerPointTile;

/**
 * Elevation works on Android
 * For shadow to have an effect on IOS, backrground should be added
 */

const styles = StyleSheet.create({
    containerTile: {
        width: '30%',
        height: 130,
        margin:5,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    tile: {
        flex: 1
    },
    tilePressed : {
        opacity: 0.5
    },
    imageContainer: {
        width: '100%',
        height: 100,
    
    },
    image : {
        width: '100%',
        height: '100%',
      
    }   
});