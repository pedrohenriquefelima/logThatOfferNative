import {View, Text, StyleSheet, FlatList} from 'react-native';

//custom components
import SearchStoreItem from '../components/SearchStoreItem';
import SearchStoreInput from '../components/SearchStoreInput';
import MarkerPointTileContainer from '../components/MarkerPointTileContainer';
import Map from '../components/Map';

function HomeScreen({navigation}) {



    let storeSuggestions = [
        {
          name: 'Coop',
          postcode: '8767h',
          Street: 'Durham'
        },
        {
          name: 'Sainsbury',
          postcode: '890967h',
          Street: 'Durham'
        },
        {
          name: 'Morrison',
          postcode: '788987',
          Street: 'Durham'
        },
        {
          name: 'Tesco',
          postcode: 'jkiuik',
          Street: 'Durham'
        },
        {
          name: 'Coop',
          postcode: '8767h',
          Street: 'Durham'
        },
        {
          name: 'Test1',
          postcode: 'jfr',
          Street: 'Durham'
        },
        {
          name: 'Test2',
          postcode: 'hiyui',
          Street: 'Durham'
        },
        {
          name: 'Test3',
          postcode: 'ccee',
          Street: 'Durham'
        },
        {
          name: 'Coop',
          postcode: '8767h',
          Street: 'Durham'
        },
        {
          name: 'Test1',
          postcode: 'jfr',
          Street: 'Durham'
        },
        {
          name: 'Test2',
          postcode: 'hiyui',
          Street: 'Durham'
        },
        {
          name: 'Test3',
          postcode: 'ccee',
          Street: 'Durham'
        }
      ]

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
            <Map></Map>
            </View>
            {/* <View style={styles.searchContainer}> */}
                {/* <MarkerPointTileContainer/> */}
            {/* <SearchStoreInput/> */}
            {/* <FlatList 
                data={storeSuggestions} 
                renderItem={(itemData) => {
                return <SearchStoreItem searchItem={itemData.item}/>
            }} 
                keyExtractor={(item, index)=> {
                return index;
                }}
                alwaysBounceVertical={false}/>     */}
            {/* </View> */}
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
      mapContainer: {
        width:'100%',
        height: '60%',
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        borderWidth: 2,
        borderColor: 'darkblue',
        overflow: 'hidden'
      },
      searchContainer: {
        width:'100%',
        height: '25%',
        borderTopEndRadius: 6,
        borderTopLeftRadius:6,
        borderWidth: 2,
        borderColor: 'green'
      }
});