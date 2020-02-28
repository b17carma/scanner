import {ADD_TEST} from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TEST) {

        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;