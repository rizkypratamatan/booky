import accountSlice from "@/stores/slices/accountSlice";
import tokenSlice from "@/stores/slices/tokenSlice";
import {configureStore} from "@reduxjs/toolkit";


export const reduxStore = configureStore({
    reducer: {
        account: accountSlice,
        token: tokenSlice,
    },
});

export type AppStore = typeof reduxStore;
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
