import {Text,View,Pressable,StyleSheet} from 'react-native';
import SearchStoreInput from '../components/SearchStoreInput';
import {useNavigation} from '@react-navigation/native'
import routes from '../constants/routes';

function SignInScreen(){
    const navigation = useNavigation();

    function signiInToHomeHandler(){
        navigation.navigate(routes.PROFILE_NAVIGATOR);
    }


    return (
        <View>
            <View>
                <SearchStoreInput/>
                <SearchStoreInput/>
            </View>
            <View style={styles.container}>
                <Pressable style={[styles.button,styles.buttunSignIn]} onPress={signiInToHomeHandler}>
                    <Text style={styles.textCenter}>Sign In</Text>
                </Pressable>
                <Text>Forgot password?</Text>
                <Text>Don't have an account?</Text>
                <Text>Sign up</Text>
            </View>
        </View>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        alignItems:'center'
    },
    button: {
        borderWidth:2,
        width: '70%',
        height:45
    },
    buttunSignIn: {
        backgroundColor: '#2699FB',
        overflow:'hidden',
        marginBottom: 5,
        borderRadius: 20,
        borderColor: '#2699FB',
    },
    searchInputText: {
        paddingLeft: 15,
        fontSize: 15
    },
    textCenter: {
        textAlign: 'center'
    }
});