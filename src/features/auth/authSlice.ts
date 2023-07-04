import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import axios from "axios";
import { baseURl } from "./api";

interface AuthState {
  user: User | null;
  error: string | null;
  isLoading: boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
  token: string;
  role: string;
  phone_number: string;
  full_name: string;
}

const initialState: AuthState = {
  user: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<AuthState>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;

export const loginUser =
  (username: string, password: string): AppThunk<Promise<boolean>> =>
  async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(baseURl("login"), {
        username,
        password,
      });
      const userToken = response.data.data.user.token;
      localStorage.setItem("token", userToken);
      if (userToken) {
        dispatch(loginSuccess(userToken));
        return true;
      } else {
        dispatch(loginFailure("Invalid response from API"));
        return false;
      }
    } catch (error) {
      return false;
    }
  };

export default authSlice.reducer;
