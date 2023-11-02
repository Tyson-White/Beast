import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import {userState} from "../../models/models.ts";
import type {User} from "../../types/types.ts";




const initialState: userState = {
    isAuth: false,
    token: '',
    user: {
        userId: '',
        email: '',
        token: ''
    }
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {

        setUser: (state,  action:PayloadAction<User>) => {
            state.user = action.payload
            state.isAuth = true
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.isAuth = false
            state.user = {userId: '', email: '', token: ''}
            localStorage.removeItem('user')
        }
    }
})


export const {setUser, logout} = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user
export default authSlice.reducer