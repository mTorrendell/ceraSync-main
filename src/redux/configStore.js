import { configureStore } from "@reduxjs/toolkit";

import eventReducer from "./slices/eventSlice";
import authReducer  from "./slices/authSlice";
import emailReducer from "./slices/emailSlice";

export default configureStore({
    reducer: {
        store: eventReducer,
        auth:  authReducer,
        email: emailReducer
    }
});