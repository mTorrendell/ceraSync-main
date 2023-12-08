import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURLPublic = axios.create({ baseURL: "http://cerasync-back-49c53729469a.herokuapp.com/api/events/public" });
const baseURL = axios.create({ baseURL: "http://cerasync-back-49c53729469a.herokuapp.com/api/events/" });

baseURL.interceptors.request.use(
    (config) => {
        //localStorage.setItem("CERASYNC_JWT_TOKEN", "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0VXNlckB0ZXN0LmNvbSIsImlhdCI6MTcwMjA1ODI3NCwiZXhwIjoxNzAyMDYxMTU0fQ.4MaI_aSQqkjHi5pEdWTWKEdWOvVrBkuaw0HyD8IDn7Q");
        /* 
            Uncomment upper string if you want to test the login required acitons
            AND go to postman, make auth req, and paste the response here
        */
        const token = localStorage.getItem("CERASYNC_JWT_TOKEN");
        if (token) config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const initialState = {
    events: [],
    currentEvent: undefined,
    isError: false,
    errorMsg: ""
};

export const getAllEvents = createAsyncThunk("store/getAllEvents", async () => {
    const response = await baseURLPublic.get("/get_all_events");
    return response.data;
});

export const getEventById = createAsyncThunk("store/getEventById", async (id) => {
    const response = await baseURLPublic.get(`/get_event_by_id?id=${id}`);
    return await response.data;
});

export const addEvent = createAsyncThunk("store/addEvent", async (event) => {
    const response = await baseURL.post("/add_event", event);
    return response.data;
});

export const updateEvent = createAsyncThunk("store/updateEvent", async (event) => {
    const response = await baseURL.post("/update_event", event);
    return response.data;
});

export const deleteEventById = createAsyncThunk("store/deleteEventById", async (id) => {
    const response = await baseURL.delete(`/delete_event?id=${id}`);
    return response.data;
});

const eventSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        setCurrentEvent(state, action) {
            state.currentEvent = action.payload;
        },
        setErrorEvents(state, action) {
            state.isError = action.payload.isError;
            state.errorMsg = action.payload.errorMsg;
        }
    },
    extraReducers(builder) {
        builder
            // getAllEvents cases
            .addCase(getAllEvents.fulfilled, (state, action) => {
                state.events = action.payload.events;
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
                state.errorMsg = "Failed to load events";
            })

            // getEventById cases
            .addCase(getEventById.fulfilled, (state, action) => {
                state.currentEvent = action.payload.event;
            })
            .addCase(getEventById.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
                state.errorMsg = "Failed to load events";
            })

            // addEvent cases
            .addCase(addEvent.fulfilled, (state, action) => {
                state.events.push(action.payload.event);
            })
            .addCase(addEvent.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
                state.errorMsg = "Failed to add events";
            })

            // updateEvent cases
            .addCase(updateEvent.fulfilled, (state, action) => {
                for (let i = 0; i < state.events.length; i++) {
                    if (state.events[i].id === action.payload.event.id) {
                        state.events[i] = action.payload.event;
                        break;
                    }
                }
            })
            .addCase(updateEvent.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
                state.errorMsg = "Failed to update event";
            })

            // deleteEvent cases
            .addCase(deleteEventById.fulfilled, (state, action) => {
                for (let i = 0; i < state.events.length; i++) {
                    if (state.events[i].id === action.payload.event.id) {
                        state.events.splice(i, 1);
                        break;
                    }
                }
            })
            .addCase(deleteEventById.rejected, (state, action) => {
                console.log(action.payload);
                state.isError = true;
                state.errorMsg = "Failed to delete event";
            });
    }
});

export const {
    setCurrentEvent,
    setErrorEvents
} = eventSlice.actions;

export const selectAllEvents = (state) => state.store.events;
export const selectCurrentEvent = (state) => state.store.currentEvent;
export const selectIsError = (state) => state.store.isError;
export const selectErrorMsg = (state) => state.store.errorMsg;

export default eventSlice.reducer;