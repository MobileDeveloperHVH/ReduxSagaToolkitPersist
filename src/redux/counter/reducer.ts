import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const NAME_SPACE = 'counterReducer';

export const counterSlice = createSlice({
  name: NAME_SPACE,
  initialState,
  reducers: {
    setValue(state, action) {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const {setValue} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
