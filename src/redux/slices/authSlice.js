import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = axios.create({ baseURL: "http://cerasync-back-49c53729469a.herokuapp.com/api/auth" });

const initialState = {
    isLogged: false,
    isEmailExists: undefined,
    currEmail: "",
    currId: "",
    isError: false,
    errorMsg: ""
};

export const authenticate = createAsyncThunk("auth/authenticate", async (user) => {
    const response = await baseURL.post("/authenticate", user);
    return response.data;
});

export const register = createAsyncThunk("auth/register", async (user) => {
    const response = await baseURL.post("/register", user);
    return response.data;
});

export const checkEmail = createAsyncThunk("auth/checkEmail", async (user) => {
    const response = await baseURL.post("/email_check", user);
    return response.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLogged(state, action) {
            state.isLogged = action.payload;
        },
        setIsEmailExists(state, action) {
            state.isEmailExists = action.payload;
        },
        setCurrEmail(state, action) {
            state.currEmail = action.payload
        },
        setCurrId(state, action) {
            state.currId = action.payload
        },
        setErrorAuth(state, action) {
            state.isError = action.payload.isError;
            state.errorMsg = action.payload.errorMsg;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(authenticate.fulfilled, (state, action) => {
                state.isLogged = true;
                localStorage.setItem("CERASYNC_JWT_TOKEN", action.payload.token);
                state.currId = action.payload.id;
            })
            .addCase(authenticate.rejected, (state, action) => {
                console.log(action.error);
                state.isError = true;
                state.errorMsg = action.error.code === 'ERR_BAD_REQUEST' ?
                    "Wrong username or password" :
                    `Failed to authenticate: ${action.error.message}`;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLogged = true;
                localStorage.setItem("CERASYNC_JWT_TOKEN", action.payload.token);
                state.currId = action.payload.id;
            })
            .addCase(register.rejected, (state, action) => {
                console.log(action.error);
                state.isError = true;
                state.errorMsg = action.error.code === 'ERR_BAD_REQUEST' ?
                    // Test this: action.error.response.status === 400
                    "Username has aleready taken" :
                    `Failed to register: ${action.error.message}`;
            })
            .addCase(checkEmail.fulfilled, (state, action) => {
                state.isEmailExists = action.payload.isExists;
                state.currEmail = action.payload.email;
            })
            .addCase(checkEmail.rejected, (state, action) => {
                console.log(action.error);
                state.isError = true;
                state.errorMsg = "Failed to check the email."
            })

    }
});

export const {
    setIsLogged,
    setIsEmailExists,
    setCurrEmail,
    setCurrId,
    setErrorAuth
} = authSlice.actions;

export const selectIsLogged      = (state) => state.auth.isLogged;
export const selectIsEmailExists = (state) => state.auth.isEmailExists;
export const selectCurrEmail     = (state) => state.auth.currEmail;
export const selectIsError       = (state) => state.auth.isError;
export const selectCurrId        = (state) => state.auth.currId;
export const selectErrorMsg      = (state) => state.auth.errorMsg;

export default authSlice.reducer;