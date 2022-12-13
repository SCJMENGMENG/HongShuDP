import React, { Component } from 'react';
import Render from './render'
class LunchPage extends Component<{}> {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.jumpToLogin = this.jumpToLogin.bind(this)
    }

    jumpToLogin(){
        this.props.navigation.navigate('LoginRoute')
    }

    componentDidMount(): void {
        this.timer = setTimeout(() => {
            this.jumpToLogin()
        },2000)
    }

    render() {
        return Render.render.call(this);
    }
}

export default LunchPage;
