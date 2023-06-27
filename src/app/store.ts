// Đường dẫn: src/app/store.ts

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ThunkAction, Action, AnyAction } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppThunkDispatch = (
  action: AppThunk
) => Promise<any> | ReturnType<typeof store.dispatch>;

export default store;
