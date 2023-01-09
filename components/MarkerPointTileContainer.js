import {View,StyleSheet} from "react-native";
import MarkerPointTile from "./MarkerPointTile";
import {useNavigation} from '@react-navigation/native'
import ROUTES from '../constants/routes';

function MarkerPointTileContainer(){
    const navigation = useNavigation();
    console.log()
    function tileDetailsScreenHandler(){
        console.log(ROUTES.DETAILS);
        navigation.navigate(ROUTES.DETAILS, {objectAsAParam: {id: 1,title: 'Coop',description: 'Coop is a very expensive supermarket'}});
    }

    return (
    <View style={styles.container}>
        <MarkerPointTile onPressParent={tileDetailsScreenHandler}/>
    </View>
    );
}
export default MarkerPointTileContainer;

const styles = StyleSheet.create({
    container: {
        borderColor: 'pink',
        borderWidth: 2
    }
})