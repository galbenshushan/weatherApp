import { createSlice } from "@reduxjs/toolkit";

const metricSlice=createSlice({
    name:'metric',
    initialState:false,
    reducers:{
        toggleMetric(state){
            return state = !state
        }
    }
})

export const metricActions = metricSlice.actions;

export default metricSlice;