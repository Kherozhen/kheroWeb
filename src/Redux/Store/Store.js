import { configureStore } from '@reduxjs/toolkit';

import modalReducer from '../Reducers/ModalReducer';

const Store = configureStore({
    reducer: {
        modal: modalReducer,
    }
});

export default Store;