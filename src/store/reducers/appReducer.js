import actionTypes from '../actions/actionTypes';

const initialState = {
    started: true,
    screen1Value: 1,
    screen2Value: 2,
    screen3Value: 3,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_START_UP_COMPLETE: 
            return {
                ...state,
                started: true
            }
        default:
            return state;
    }
}

export default appReducer;