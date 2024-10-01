import { TOGGLE_BUTTON_ACTIVE } from "../Actions/ActiveButtonAction"; 

const initialState = {
    isActive: false,
};

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_BUTTON_ACTIVE:
            return {
                ...state,
                isActive: !state.isActive,
            };
        default:
            return state;
    }
};

export default buttonReducer;