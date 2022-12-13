import {combineReducers} from 'redux';
import {SCJ_PICTURE_DATA} from '../constants/PictureTypes';
import {pictureReducer} from './pictureReducer';

export const PictureAction = (value,testValue)=>{
    return {
        type:SCJ_PICTURE_DATA,
        params:value,
        testValue:testValue
    }
}

export const PictureThunkAction = (value)=> {
    return (dispatch,getState)=> {
        fetch('https://www.baidu.com').then(()=>{
            dispatch(PictureAction('网络请求到的值','测试值'))
        })
    }
}

const rootRedux = combineReducers({
    pictureReducer: pictureReducer,
})

export default rootRedux
