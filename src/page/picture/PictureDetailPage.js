import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {PictureAction,PictureThunkAction} from '../../redux/index';

class PictureDetailPage extends Component {
    static navigationOptions = {
        title: 'PictureDetail',
        headerStyle: {
            backgroundColor:'yellow'
        }
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text
                    style={{
                        marginLeft:150,
                        marginTop:100
                    }}>{this.props.pictureText ? (this.props.pictureText + '==' + this.props.pictureTest) : aaaaa}</Text>
                <Button
                    title="changeReducerValue"
                    onPress={() => {
                        this.props.PictureAction('1111','2222')
                    }}
                />
            </View>
        );
    }
}

// export default PictureDetailPage;

const mapStateToProps = (state,ownProps) => {
    return {
        pictureText: state.pictureReducer.pictureText,
        pictureTest: state.pictureReducer.pictureTest
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return bindActionCreators({
        PictureAction:PictureAction,
        PictureThunkAction:PictureThunkAction,
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PictureDetailPage);
