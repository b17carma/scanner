import {SET_CURRENT_EQUIPMENT} from "../constants/action-types";

const initialState = {
    currentEquipment: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_CURRENT_EQUIPMENT) {

        return Object.assign({}, state, {
            currentEquipment: action.payload
        });
    }
    return state;
}

export default rootReducer;