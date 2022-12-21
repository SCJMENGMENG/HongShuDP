import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.title}>登录</Text>
                <View style={styles.view}>
                    <TouchableOpacity onPress = {this.jumpToStart}>
                        <Text style={styles.text}>跳转到启动页(用于广告等页面)</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <TouchableOpacity onPress = {this.jumpToHome}>
                        <Text style={styles.text}>进入APP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    view: {
        backgroundColor: 'green',
        flex: 0.05,
        justifyContent: 'center',
        margin:5,
        borderRadius:5
    },
    title:{
        padding:5,
        color:'green',
        fontWeight:'bold',
    },
    text: {
        padding:5,
        color:'white',
    }
});
