import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = axios.create({ baseURL: "https://cerasync-back-49c53729469a.herokuapp.com/api/email" });

const initialState = {
    isSuccess: undefined,
    isError: false,
    errorMsg: ""
};

export const subscribe = createAsyncThunk("email/subscribe", async (email) => {
    const response = await baseURL.post("/subscribe", email);
    return response.data;
});

const emailSlice = createSlice({
    name: "email",
    initialState,
    reducers: {
        setIsSuccess(state, action) {
            state.isSuccess = action.payload;
        },
        setErrorEmail(state, action) {
            state.isError = action.payload.isError;
            state.errorMsg = action.payload.errorMsg;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(subscribe.fulfilled, (state, action) => {
                state.isSuccess = true;
            })
            .addCase(subscribe.rejected, (state, action) => {
                console.log(action.error);
                state.isError = true;
                const errorMessage = action.error.message
                state.errorMsg = `Failed to subscribe: ${errorMessage}`;
            })
    }
})

export const {
    setIsSuccess,
    setErrorEmail
} = emailSlice.actions;

export const selectIsSuccess = (state) => state.email.isSuccess;
export const selectIsError   = (state) => state.email.isError;
export const selectErrorMsg  = (state) => state.email.errorMsg;

export default emailSlice.reducer;