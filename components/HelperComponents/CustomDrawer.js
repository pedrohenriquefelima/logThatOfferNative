import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Dimensions} from 'react-native';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';

const {width} = Dimensions.get('screen');

function CustomDrawer(props){
    const imageBackground = {uri:"https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-HD-Solid-Color-Wallpaper.jpg"}
    const imageProfile = {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWYXoT82R6VsoCOXzgGh2IJEMT4Nf6kV62Us8IxJk&s"}
    return (
        <DrawerContentScrollView {...props}>
            <ImageBackground source={imageBackground} style={{height: 140}}>
                <Image source={imageProfile} style={styles.userImg}/>
            </ImageBackground>
            <View style={styles.drawelListWrapper}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
    );
}

export default CustomDrawer;

const styles = StyleSheet.create({
    userImg: {
        width: 110,
        height:110,
        borderRadius: 110/2,
        position:'absolute',
        left: width/2 - 130,
        bottom: -110 /2,
        borderWidth: 4,
        borderColor: 'white'
    },
    drawelListWrapper : {
        marginTop: 110/2 + 10

    }
});