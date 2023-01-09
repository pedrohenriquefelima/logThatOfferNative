import {Stylesheet} from 'react-native';
import { StyleSheet, Text,View} from 'react-native';

function SearchStoreItem(props) {
    return (
        <View>
            <Text>{props.searchItem.name}</Text>
        </View>  
      );
}

export default SearchStoreItem;

// const styles = Stylesheet.create({
// });
/**
 * <Pressable onPress={replaceAfunction}>
 *      <component>
 * <Pressable>
 */