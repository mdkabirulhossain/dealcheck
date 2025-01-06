import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        value:0,
    },
    {
        id: 2,
        value:0,
    }
]

const countersSlice = createSlice({
    name:"Counters",
    initialState,
    reducers: {
        increment: (state, action) =>{
            //Ami ja action ta nebo mane click ta korbo oikan thake ja id ta ashbe sheta payload a pabo. Id ashbe bcz Otherwise we don't know where this id come
            //action.payload
            const counterIndex = state.findIndex(c=> c.id === action.payload);
            state[counterIndex].value ++;

        }, 
        decrement: (state, action) =>{
            const counterIndex = state.findIndex(c => c.id === action.payload);
            state[counterIndex].value --;

        }, 

    }

})

export default countersSlice.reducer;
export const {increment, decrement} = countersSlice.actions;