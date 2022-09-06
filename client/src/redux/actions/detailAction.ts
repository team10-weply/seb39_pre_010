import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from 'api';
import { CreateAsyncThunkTypes } from 'redux/store';

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

export const getDetailThunk = createAsyncThunk<
  IDetail,
  number,
  CreateAsyncThunkTypes
>('question/getDetail', async (id: number) => {
  const response = await client.get(`/api/v1/questions/${id}`);
  return response.data;
});
