import { configureStore } from '@reduxjs/toolkit';
import showListSlice from './showListSlice';

// 스토어는 프로젝트당 1개만 있어야한다.
const store = configureStore({
  reducer: {
    status: showListSlice.reducer,
  },
});

export default store;
