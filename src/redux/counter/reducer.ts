import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counterReducer',
  initialState,
  reducers: {
    setValue: (state, action) => ({
      ...state,
      value: action.payload.value,
    }),
  },
});

export const counterReducer = counterSlice.reducer;
export const {setValue} = counterSlice.actions;
