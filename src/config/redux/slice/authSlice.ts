// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { loginController, signUpController } from '../../controller';
// import { IUser, loginData, loginResponse, signupData, signUpResponse } from '../../../types/global';
// import { paths } from '../../../routes/Path';

// interface IAuthState {
//   user: IUser | null;
//   token: string | null;
//   error: string | null;
//   isAuthLoading: boolean;
// }

// const initialState: IAuthState = {
//   user: null,
//   token: null,
//   error: null,
//   isAuthLoading: false,
// };

// export const login = createAsyncThunk<
//   { user: IUser; token: string },
//   loginData,
//   { rejectValue: string }
// >(paths.login, async (data, { rejectWithValue }) => {
//   try {
//     const { data: result } = await loginController({ data: data });
//     const loginResponse = result as loginResponse;
// console.log(loginResponse, 'loginResponse');
//     return {
//       user: {
//         email: loginResponse.user.email,
//         name: loginResponse.user.name,
//         id: loginResponse.user._id,
//         phoneNo: loginResponse.user.phoneNo,
//       },
//       token: loginResponse.token ?? '',
//     };
//   } catch (error) {
//     return rejectWithValue(
//       (error as Error)?.message || 'An error occurred during login.'
//     );
//   }
// });
// export const signUp = createAsyncThunk<
//   { user: IUser; token: string },
//   signupData,
//   { rejectValue: string }
// >('/user/register', async (data, { rejectWithValue }) => {
//   try {
//     const { data: result } = await signUpController({ data: data });
//     if (result) {
//       // Check if result has the expected properties
//       if ('user' in result && 'token' in result) {
//         const signUpResponse = result as signUpResponse;

//         return {
//           user: {
//             email: signUpResponse.user.email,
//             name: signUpResponse.user.name,
//             id: signUpResponse.user._id,
//             phoneNo: signUpResponse.user.phoneNo,
//           },
//           token: signUpResponse.token,
//         };
//       } else {
//         return rejectWithValue('Invalid response from signUpController');
//       }
//     } else {
//                           return rejectWithValue('No response from signUpController');
//     }
//   } catch (error) {
//     return rejectWithValue(
//       (error as Error).message || 'An error occurred during login.'
//     );
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: () => initialState,

//     setUser: (state, action) => {
//       if (state.user) {
//         state.user = { ...state.user, ...action.payload };
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isAuthLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         const { user, token } = action.payload;
//         state.user = user;
//         state.token = token;
//         state.isAuthLoading = false;
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload || 'An error occurred during login.';
//         state.isAuthLoading = false;
//       });
//   },
// });

// export const { logout, setUser } = authSlice.actions;
// export default authSlice.reducer;



// src/redux/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../types/global';
import { userData, loginController, logoutController } from '../../controller';

interface AuthState {
  user: IUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Thunk to check session and load user on app start
export const loadUser = createAsyncThunk('auth/loadUser', async (_, thunkAPI) => {
  try {
    const response = await userData({}); // e.g., /api/auth/me
    return response.user as IUser;
  } catch (error: any) {
    return thunkAPI.rejectWithValue('Session expired or user not authenticated');
  }
});

export const login = createAsyncThunk('auth/login', async ({data, thunkAPI}:any) => {
  try {
    const response = await loginController({ data: data });
    return response.user as IUser;
  } catch (error: any) {
    return thunkAPI.rejectWithValue('Login failed');
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await logoutController({});
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.user = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
