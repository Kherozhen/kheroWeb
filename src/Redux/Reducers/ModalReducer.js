import { OPEN_MODAL, CLOSE_MODAL } from "../Actions/ActionModal";

// State initial, la modal fermée

const initialState = {
    modalIsOpen: false,
    currentProject: null,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state, 
                modalIsOpen: true, 
                currentProject: action.payload,
            };
        case CLOSE_MODAL:
            return {
                ...state, 
                modalIsOpen: false, 
                currentProject: null,
            };
        default:
            return state;
    }
};

export default modalReducer;