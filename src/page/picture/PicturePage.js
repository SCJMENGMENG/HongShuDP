import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {connect} from 'react-redux'
import *as Actions from '../../redux/index'

class PicturePage extends Component {

    constructor(props) {
        super(props);
        this.changeReducerValue = this.changeReducerValue.bind(this)
        this.changeReducerNetValue = this.changeReducerNetValue.bind(this)
    }

    //修改reducer中的值
    changeReducerValue(a,b){
        console.log('---scj-changeReducerValue')
        this.props.changeReducerValue(a,b)
    }
    changeReducerNetValue(){
        console.log('---scj-changeReducerNetValue')
        this.props.changeReducerNetValue()
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View style={{marginTop:100}}>
                <Text style={{textAlign:'center'}}>{this.props.pictureText + '&' + this.props.pictureTest}</Text>
                <Button
                    title="go to detail"
                    onPress={() => navigate.navigate('PictureDetail')}
                />
                <Button
                    title="get reducer value"
                    onPress={() => {
                        this.changeReducerNetValue()
                        console.log('----scj----' + this.props.pictureText + '--' + this.props.pictureTest)
                    }}
                />
                <Text
                    style={{
                        textAlign:'center',
                        marginTop:100
                    }}>
                    {this.props.pictureText ? (this.props.pictureText + '=' + this.props.pictureTest) : "reducer value"}
                </Text>
                <Button
                    title="changeReducerValue"
                    onPress={() => {
                        this.changeReducerValue('1111','2222')
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

const mapStateToProps = (state,ownProps) => {
    return {
        pictureText: state.pictureReducer.pictureText,
        pictureTest: state.pictureReducer.pictureTest
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        changeReducerValue:(value,testValue)=>{
            dispatch(Actions.PictureAction(value,testValue))
        },
        changeReducerNetValue:()=>{
            dispatch(Actions.PictureThunkAction())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PicturePage);
