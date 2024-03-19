import { configureStore } from '@reduxjs/toolkit';
import showListSlice from './closetSlice/showListSlice';
import addClothesSlice from './closetSlice/addClothesSlice';
import imgSlice from './closetSlice/imgSlice';

// 스토어는 프로젝트당 1개만 있어야한다.
const store = configureStore({
  reducer: {
    status: showListSlice.reducer,
    clothes: addClothesSlice.reducer,
    img: imgSlice.reducer,
  },
});

export default store;
