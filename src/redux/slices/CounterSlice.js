import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlices = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state, action) =>{
            state.value++
        },
        decrement: (state, action) => {
          state.value--;
        },
        increaseAmount: (state, action) => {
          state.value += action.payload;
        }
    }
})

//Generate the action creators
export const {increment, decrement, increaseAmount} = counterSlices.actions

//Export reducers
export default counterSlices.reducer