import { createSlice } from '@reduxjs/toolkit';

// 초기 상태 정의
const initialState = {
  userid: '', // 초기값은 빈 문자열
};

// slice 생성
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserid: (state, action) => {
      state.userid = action.payload; // userid를 설정하는 액션
    },
    clearUserid: (state) => {
      state.userid = ''; // userid를 초기화 하는 액션
    },
  },
});

// 액션 및 리듀서 내보내기
export const { setUserid, clearUserid } = userSlice.actions;
export default userSlice.reducer;
