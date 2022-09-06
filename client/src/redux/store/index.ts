import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import detailSlice from 'redux/reducers/detailSlice';

export const store = configureStore({
  reducer: {
    detail: detailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type CreateAsyncThunkTypes = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
};
