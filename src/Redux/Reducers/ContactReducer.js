
const initialState = {
    isFormVisible: true,
};

const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_FORM':
        return {
          ...state,
          isFormVisible: !state.isFormVisible, // Inverse la visibilité du formulaire
        };
      default:
        return state;
    }
  };
  
  export default ContactReducer;