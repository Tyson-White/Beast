import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";



interface userState {
    isAuth: boolean,
    token: string,
    user: object
}

const initialState: userState = {
    isAuth: false,
    token: '',
    user: {}
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setIsAuth: (state, action:PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        setUser: (state,  action:PayloadAction<object>) => {
            state.user = action.payload
            state.isAuth = true
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        setToken: (state, action:PayloadAction<string>) => {
            state.token = action.payload
        }
    }
})


export const {setIsAuth, setUser, setToken} = authSlice.actions

export const selectUser = (state: RootState) => state.auth.user
export default authSlice.reducer