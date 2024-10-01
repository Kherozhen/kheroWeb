import { configureStore } from '@reduxjs/toolkit';

import ContactReducer from '../Reducers/ContactReducer';

const Store = configureStore({
    reducer: {
        form: ContactReducer,
    },
});

export default Store;