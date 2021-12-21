import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'dark',
    reducers: {
        toggleTheme(state) {
            if (state === 'dark') {
                return state = 'light'
            }
            if (state === 'light') {
                return state = 'dark'
            }
        }
    }
})

export const themeActions = themeSlice.actions;

export default themeSlice;
