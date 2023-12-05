import { configureStore } from "@reduxjs/toolkit";

import eventReducer from "./slices/eventSlice";
import authReducer  from "./slices/authSlice";

export default configureStore({
    reducer: {
        store: eventReducer,
        auth:  authReducer
    }
});