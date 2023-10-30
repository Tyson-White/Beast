import {configureStore} from "@reduxjs/toolkit";
import {beastApi} from "./api/beast.api.ts";
import selectSlice from "./slices/selectSlice.ts";


export const store = configureStore({
    reducer: {
        select: selectSlice,
        [beastApi.reducerPath]: beastApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(beastApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch