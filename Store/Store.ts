// 전부 다 로컬에 저장하는 코드
// 'use client';

// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { addClothesReducer } from './closetSlice/addClothesSlice';
// import { showListReducer } from './closetSlice/showListSlice';
// import userReducer from './userSlice/userSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   status: showListReducer,
//   clothes: addClothesReducer,
//   user: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);

// export default store;

// userid만 로컬에 저장하는 코드
'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { calendarReducer } from './calendarSlice/calendarSlice';
import userReducer from './userSlice/userSlice';
import { addClothesReducer } from './closetSlice/addClothesSlice';
import { showListReducer } from './closetSlice/showListSlice';
import { selectDataReducer } from './closetSlice/selectDataSlice';
import { aiRecommedRuducer } from './aiSlice/aiSlice';
import mainPageReducer from './mainSlice/mainPageSlice';

const userPersistConfig = {
  key: 'user',
  storage,
};

const weatherPersistConfig = {
  key: 'aiRecommend',
  storage,
};

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  status: showListReducer,
  clothes: addClothesReducer,
  search: selectDataReducer,
  calendar: calendarReducer,
  aiRecommend: persistReducer(weatherPersistConfig, aiRecommedRuducer),
  mainPage: mainPageReducer,
});
// test
const store = configureStore({
  reducer: rootReducer, // 다음이 middleware 추가 코드이다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
