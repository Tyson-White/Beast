import {configureStore} from "@reduxjs/toolkit";
import {beastApi} from "./api/beast.api.ts";
import selectSlice from "./slices/selectSlice.ts";
import authSlice from "./slices/authSlice.ts";
import appSlice from "./slices/appSlice.ts";


export const store = configureStore({
    reducer: {
        select: selectSlice,
        auth: authSlice,
        app: appSlice,
        [beastApi.reducerPath]: beastApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(beastApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch