// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Define the initial state type
// interface AuthState {
//   user: { name: string } | null;
//   isAuthenticated: boolean;
// }

// // Initial state
// const initialState: AuthState = {
//   user: null,
//   isAuthenticated: false,
// };

// // Create a slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action: PayloadAction<{ name: string }>) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//     },
//   },
// });

// // Export actions
// export const { login, logout } = authSlice.actions;

// // Export reducer
// export default authSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginController, signUpController } from '../../controller';
import { IUser, loginData, loginResponse, signupData, signUpResponse } from '../../../types/global';

interface IAuthState {
  user: IUser | null;
  token: string | null;
  error: string | null;
  isAuthLoading: boolean;
}

const initialState: IAuthState = {
  user: null,
  token: null,
  error: null,
  isAuthLoading: false,
};

export const login = createAsyncThunk<
  { user: IUser; token: string },
  loginData,
  { rejectValue: string }
>('/user/signIn', async (data, { rejectWithValue }) => {
  try {
    const { data: result } = await loginController({ data: data });
    const loginResponse = result as loginResponse;

    return {
      user: {
        email: loginResponse.user.email,
        name: loginResponse.user.name,
        id: loginResponse.user._id,
        phoneNo: loginResponse.user.phoneNo,
      },
      token: loginResponse.token ?? '',
    };
  } catch (error) {
    return rejectWithValue(
      (error as Error)?.message || 'An error occurred during login.'
    );
  }
});
export const signUp = createAsyncThunk<
  { user: IUser; token: string },
  signupData,
  { rejectValue: string }
>('/user/register', async (data, { rejectWithValue }) => {
  try {
    const { data: result } = await signUpController({ data: data });
    if (result) {
      // Check if result has the expected properties
      if ('user' in result && 'token' in result) {
        const signUpResponse = result as signUpResponse;

        return {
          user: {
            email: signUpResponse.user.email,
            name: signUpResponse.user.name,
            id: signUpResponse.user._id,
            phoneNo: signUpResponse.user.phoneNo,
          },
          token: signUpResponse.token,
        };
      } else {
        return rejectWithValue('Invalid response from signUpController');
      }
    } else {
                          return rejectWithValue('No response from signUpController');
    }
  } catch (error) {
    return rejectWithValue(
      (error as Error).message || 'An error occurred during login.'
    );
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,

    setUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.isAuthLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload || 'An error occurred during login.';
        state.isAuthLoading = false;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
