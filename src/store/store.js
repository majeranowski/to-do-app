import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo';

export default configureStore({
    reducer: {
        tasks: todoReducer,
    },
});