import { createSlice } from "@reduxjs/toolkit";
import initialDetails from "../../data/initialDetails";

const initialState = {
    ratingsMap: initialDetails.reduce((acc, person) => {
        acc[person.id] = 0;
        return acc;
    }, {}),
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state, action) => {
            const { id } = action.payload;
            if (state.ratingsMap[id] < 10){
            state.ratingsMap[id] += 1;
            }
        },
        decrement: (state, action) => {
            const { id } = action.payload;
            if (state.ratingsMap[id] > 0){
                state.ratingsMap[id] -= 1
            }
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer