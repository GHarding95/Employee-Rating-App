import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialDetails from "../../data/initialDetails";

interface CounterState {
    ratingsMap: { [key: number]: number };
}

const initialState: CounterState = {
    ratingsMap: initialDetails.reduce((acc, person) => {
        acc[person.id] = 0;
        return acc;
    }, {} as { [key: number]: number }),
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            if (state.ratingsMap[id] < 10){
                state.ratingsMap[id] += 1;
            }
        },
        decrement: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            if (state.ratingsMap[id] > 0){
                state.ratingsMap[id] -= 1;
            }
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;