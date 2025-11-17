import type {MeResponseDataProfile} from "@/types/interfaces/MeResponse.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const accountSlice = createSlice({
    name: 'account',
    initialState: {id: 0, createdAt: '', email: '', name: '', role: ''},
    reducers: {
        setAccount: (state, action: PayloadAction<MeResponseDataProfile>) => {
            state.id = action.payload.id;
            state.createdAt = action.payload.createdAt.toString();
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.role = action.payload.role;
        },
    },
});

export const {setAccount} = accountSlice.actions;
export default accountSlice.reducer;
