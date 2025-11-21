import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filter',
    initialState: {category: 0, q: ''},
    reducers: {
        setFilterCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload;
        },
        setFilterQ: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        }
    },
});

export const {setFilterCategory, setFilterQ} = filterSlice.actions;
export default filterSlice.reducer;
