import {SCJ_PICTURE_DATA} from '../constants/PictureTypes';

const initState = {
    pictureText: '默认',
    pictureTest: '初始值',
};

export const pictureReducer = (state = initState, action) => {
    switch (action.type) {
        case SCJ_PICTURE_DATA:
            return {...state, pictureText: action.params,pictureTest: action.testValue};
            break;
        default:
            return state;
            break;
    }
};
