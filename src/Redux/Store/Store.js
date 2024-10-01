import { configureStore } from '@reduxjs/toolkit';

import ContactReducer from '../Reducers/ContactReducer';
import ActiveButtonReducer from '../Reducers/ActiveButtonReducer';

const Store = configureStore({
    reducer: {
        form: ContactReducer,
        button: ActiveButtonReducer
    },
});

export default Store;