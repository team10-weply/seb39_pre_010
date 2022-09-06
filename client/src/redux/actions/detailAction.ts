import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from 'api';
import { IQuestionDetail } from 'api/types/types';
import { CreateAsyncThunkTypes } from 'redux/store';

export const getDetailThunk = createAsyncThunk<
  IQuestionDetail,
  number,
  CreateAsyncThunkTypes
>('question/getDetail', async (id: number) => {
  const response = await client.get(`/api/v1/questions/${id}`);
  return response.data;
});
