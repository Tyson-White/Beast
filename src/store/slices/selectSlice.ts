import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SelectState} from "../../models/models.ts";
import {RootState} from "../store.ts";



const initialState: SelectState = {
    seasonValue: 'All',
    thingValue: 'All',
    thingTypeValue: 'All'
}
export const selectSlice = createSlice({
    name: 'selectSlice',
    initialState,
    reducers: {
        setSeasonValue: (state, action:PayloadAction<string>) => {
            state.seasonValue = action.payload
        },
        setThingValue: (state, action:PayloadAction<string>) => {
            state.thingValue = action.payload
        },
        setThingTypeValue: (state, action:PayloadAction<string>) => {
            state.thingTypeValue = action.payload
        }

    }
})

export const {setSeasonValue, setThingValue, setThingTypeValue} = selectSlice.actions

export const selectValue = (state: RootState) => state.select.thingValue
export default selectSlice.reducer