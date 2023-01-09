import { Pressable,StyleSheet } from "react-native";
import { Iconicons } from '@expo/vector-icons';

//this component can be returned in the headerRight instead of 'Button'
function IconButton({icon, color,onTap}){
    return (
        <Pressable onPress={onTap} style={({pressed})=> pressed && styles.pressed}>
            <Iconicons name={icon} size={24} color={color}/>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});