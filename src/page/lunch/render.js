import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

const {width, height, scale} = Dimensions.get('window');

export default {
    render() {
        return (
            <View style = {styles.container}>
                <Image style={{width:width,height:height}} source={require('../../source/imgs/lunch_img.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});
