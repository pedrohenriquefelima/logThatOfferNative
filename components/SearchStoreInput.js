import { useState } from 'react';
import { StyleSheet, Text,TextInput,View} from 'react-native';
/*
As the user types in the input box, it should look for stores next to their location based on the name provided
if location is turned off, then display all list shops with that name
*/
function SearchStoreInput() {
    const [enteredSearchText, setEnteredSearchText] = useState('');

    //whenever an character is typed, it should look for an a store in a database
    function searchInputHandler(enteredText){
    }
    return (
        <View style={styles.searchInputContainer}>
            <View style={styles.searchView}>
            <TextInput
                style={styles.searchInputText}
                placeholder="Search for store..."
                onChangeText={searchInputHandler}/>
            </View> 
        </View>
        
    )
}

export default SearchStoreInput;

const styles = StyleSheet.create({
    searchInputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    searchView: {
        marginTop: 10,
        marginBottom: 10,
        width:'80%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30
    },
    searchInputText: {
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        fontSize: 15
    }
});