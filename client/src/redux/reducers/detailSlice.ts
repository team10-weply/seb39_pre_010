import { createSlice } from '@reduxjs/toolkit';
import { getDetailThunk } from 'redux/actions/detailAction';

export interface IComment {
  comment: string;
  createdAt: string;
  member: IMember;
}

export interface IMember {
  email: string;
  memberId: number;
  nickname: string;
  createdAt: number;
  modifiedAt: number;
  password: string;
}

export interface IDetail {
  content: string;
  createdAt: number;
  questionId: number;
  title: string;
  updatedAt: number;
  member: IMember;
  answer: IComment;
}

export interface IDetailSlice {
  isLoading: boolean;
  error: string;
  detail: IDetail | null;
}

const initialState: IDetailSlice = {
  isLoading: false,
  error: 'no error',
  detail: null,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetailThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.detail = payload;
      })
      .addCase(getDetailThunk.rejected, (state, { payload }) => {
        state.isLoading = true;
        if (payload) {
          state.error = '에러 발생';
        }
      });
  },
});

export default detailSlice.reducer;
