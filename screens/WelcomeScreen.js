import {Text,View,StyleSheet,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import routes from '../constants/routes';

function WelcomeScreen(){
    const navigation = useNavigation();

    function goToSignUpHandler(){
        navigation.navigate(routes.SIGNIN, {objectAsAParam: {id: 1,title: 'Coop',description: 'Coop is a very expensive supermarket'}});
    }

    return (
        <View>
            <View style={styles.welcomingText}>
                <Text>HELLO</Text>
                <Text>Something goes here...</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button,styles.buttinSignIn]} onPress={goToSignUpHandler}>
                    <Text style={styles.textCenter}>Sign In</Text>
                </Pressable>
                <Text style={[styles.button,styles.buttinSignUp]}>Sign Up</Text>
            </View>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    welcomingText: {
        height: 480,
        paddingTop: 50,
        paddingHorizontal: 20
    },
    buttonContainer: {
        alignItems:'center'
    },
    button: {
        borderWidth:2,
        width: '70%',
        height:45
    },
    buttinSignIn: {
        backgroundColor: '#2699FB',
        overflow:'hidden',
        marginBottom: 5,
        borderRadius: 20,
        borderColor: '#2699FB',
    },
    buttinSignUp: {
        backgroundColor: 'white',
        overflow:'hidden',
        borderRadius: 20,
        borderColor: '#2699FB',
        textAlign: 'center'
    },
    textCenter: {
        alignItems:'center',
        textAlign: 'center'
    }
});