import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import {appState} from "../../models/models.ts";

const initialState: appState = {
    isLoading: false
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setIsLoading: (state, action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const {setIsLoading} = appSlice.actions

export const selectLoading = (state: RootState) => state.app.isLoading
export default appSlice.reducer