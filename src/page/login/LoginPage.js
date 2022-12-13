import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import Render from './render'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.jumpToStart = this.jumpToStart.bind(this)
        this.jumpToHome = this.jumpToHome.bind(this)
    }

    jumpToStart() {
        this.props.navigation.navigate('LunchRoute')
    }

    jumpToHome() {
        this.props.navigation.navigate('AppRoute')
    }

    render() {
        return Render.render.call(this);
    }
}

export default LoginPage
