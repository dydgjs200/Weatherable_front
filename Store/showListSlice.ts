import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import exp from 'constants';

interface Status {
  status: boolean;
}

const initialState: Status = {
  status: true,
};

const showListSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    showList: (state, action: PayloadAction<boolean>) => {
      console.log(action);
      state.status = action.payload;
    },
  },
});

export default showListSlice;

export const { showList } = showListSlice.actions;
