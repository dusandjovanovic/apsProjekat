import * as actionTypes from '../actions/actions';

const initialState = {
    username: null,
    friends: null,
    requests: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_FETCH_DATA:
            return {
                ...state,
                username: action.username,
                friends: action.friends
            };
        case actionTypes.USER_FETCH_DATA_FAIL:
            return {
                username: null,
                friends: null,
                error: action.error
            };
        case actionTypes.FRIENDS_FETCH_REQUESTS:
            return {
                ...state,
                requests: [...action.requests]
            };
        default:
            return state;
    }
};

export default reducer;