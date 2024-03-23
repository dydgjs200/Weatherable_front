'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import exp from 'constants';

interface searchData {
  selectData: string;
}

const initialState: searchData = {
  selectData: '',
};

const selectDataSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    selectData: (state, action: PayloadAction<{ value: string }>) => {
      state.selectData = action.payload.value;
    },
  },
});

export const selectDataReducer = selectDataSlice.reducer;

export default selectDataSlice;

export const { selectData } = selectDataSlice.actions;
