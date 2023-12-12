import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import userReducer from './userSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<RuturnType = void> = ThunkAction<
  RuturnType,
  RootState,
  unknown,
  Action<string>
>;
