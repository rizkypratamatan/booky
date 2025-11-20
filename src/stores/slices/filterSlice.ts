import type Filter from "@/types/interfaces/Filter.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: {category: 0},
    reducers: {
        setFilter: (state, action: PayloadAction<Filter>) => {
            state.category = action.payload.category;
        }
    },
});

export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;
