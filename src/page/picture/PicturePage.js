import React, {Component} from 'react';
import {View, Text, StyleSheet,Button,TextInput} from 'react-native';
import {connect} from 'react-redux'
import *as Actions from '../../redux/index'
import BarrageMoveView from '../../component/tool/barrageTool/BarrageMoveView';
import BarrageInputView from '../../component/tool/barrageTool/BarrageInputView';
import UI from '../../component/tool/barrageTool/UI';

class PicturePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue:'',
            data:[],
        };
        this.id = 0;
        this.data = [
            '哈喽～～～，大家好',
            '今天天气不错',
            '要好好学习天天向上啊',
            '我是一只来自北方的狼',
            '程序员牛逼',
            '阅读是人类进步的阶梯',
            '从哪里摔倒就从哪里爬起来',
            '吼吼',
            '常用链接',
            '6666',
            '走你',
            'iPhone真香',
            '这波操作我给666',
            '要开心啊',
            '机智如我',
        ]
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

    componentDidMount() {
        this.addBarrageWithInterval();
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
        this.interval1 && clearInterval(this.interval1);
    }

    addBarrageWithInterval = () => {
        this.interval = setInterval(() => {
            this.id = this.id + 1;
            // if (this.id > 500) {
            //   clearInterval(this.interval);
            //   this.interval1 = setInterval(() => {
            //     this.id = this.id + 1;
            //     const text = this.getText();
            //     const newData = [{ title: text, id: this.id }];
            //     this.setState({ data: newData });
            //   }, 3000);
            // }
            const text = this.getText();
            const newData = [{ title: text, id: this.id }];
            this.setState({ data: newData });
        }, 100);
    }

    onButtonPress = (text) => {
        this.id = this.id + 1;
        const newData = [{ title: text, id: this.id }];
        this.setState({ data: newData });
    }

    getText = () => {
        const number = this.getRundomNumber(this.data.length - 1);
        return this.data[number];
    }

    getRundomNumber = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.topStyle}>
                    <Text style={styles.titleStyle}>{this.state.inputValue ? '店名：' + this.state.inputValue : '输入店名'}</Text>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder='请输入店名'
                        maxLength={100}
                        value={this.state.inputValue}
                        onChangeText={(text) => {
                            this.setState({inputValue:text})
                            console.log('---scj---' + this.state.inputValue)
                        }}
                    />
                </View>
                <View style={{
                    backgroundColor: 'green',
                    height:100,
                    flex: 1,
                    paddingTop: UI.IS_IPHONE_X ? 34 : 24,
                    paddingBottom: UI.IS_IPHONE_X ? 44 : 0,
                }}>
                    <View style={{flex:1}}>
                        <BarrageMoveView newMessages={this.state.data} numberOfLines={10} speed={1} />
                    </View>
                    <BarrageInputView onButtonPress={this.onButtonPress} />
                </View>
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
                <View style={styles.nextStyle}>
                    <Button
                        title="下一步"
                        color={'white'}
                        onPress={() => {

                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'space-between'
    },
    topStyle:{
        margin:50,
    },
    titleStyle:{
        margin:20,
        marginLeft:0,
        fontSize:20,
        color:'green'
    },
    inputStyle:{
        fontSize:20,
        borderWidth:1,
        borderColor:'#969696',
        padding:2
    },
    nextStyle: {
        margin:50,
        backgroundColor:'green',
        borderRadius:5,
    }
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
