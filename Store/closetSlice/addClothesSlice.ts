'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface clothes {
  clothes: { [key: string]: string };
}

const initialState: clothes = {
  clothes: {
    small_img: '',
    product_name: '',
    brand: '',
    major_category: '',
    middle_category: '',
    size: '',
    weather: '',
    thickness: '',
    Style: '',
    price: '',
  },
};

const addClothesSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    selectImg: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.small_img = action.payload.value;
    },
    selectProductName: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.product_name = action.payload.value;
    },
    selectBrandName: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.brand = action.payload.value;
    },
    selectMajorCategory: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.major_category = action.payload.value;
    },
    selectMiddleCategory: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.middle_category = action.payload.value;
    },
    selectSize: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.size = action.payload.value;
    },
    selectWeather: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.weather = action.payload.value;
    },
    selectThickness: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.thickness = action.payload.value;
    },
    selectStyle: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.style = action.payload.value;
    },
    selectPrice: (state, action: PayloadAction<{ value: string }>) => {
      state.clothes.price = action.payload.value;
    },
  },
});

export const addClothesReducer = addClothesSlice.reducer; // reducer를 따로 export

// export default addClothesSlice;

export default addClothesSlice;

export const {
  selectImg,
  selectProductName,
  selectBrandName,
  selectMajorCategory,
  selectMiddleCategory,
  selectSize,
  selectWeather,
  selectThickness,
  selectStyle,
  selectPrice,
} = addClothesSlice.actions;
