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





import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


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
  LoginData,
  { rejectValue: string }
>("auth/signIn", async (data, { rejectWithValue }) => {
  try {
    const { data: result } = await loginController({ data: data });
    const loginResponse = result as ILoginResponse;

    return {
      user: {
        email: loginResponse.user.email,
        name: `${loginResponse.user.name} `,
        id: loginResponse.user._id,
        profilePhoto: loginResponse.user.profilePhoto ?? "",
        phoneNo: loginResponse.user.phone,
      },
      token: loginResponse.token,
    };
  } catch (error) {
    return rejectWithValue(
      (error as Error)?.message || "An error occurred during login."
    );
  }
});
export const signUp = createAsyncThunk<
  { user: IUser; token: string },
  ISignupData,
  { rejectValue: string }
>("auth/signUp", async (data, { rejectWithValue }) => {
  try {
    
    const { data: result } = await signUpController({ data: data });
    const signUpResponse = result as ISignupResponse;

    return {
      user: {
        email: signUpResponse.user.email,
        name: `${signUpResponse.user.firstName} ${signUpResponse.user.lastName}`,
        phoneNo: signUpResponse.user.phone,
        profilePhoto: signUpResponse.user.profilePhoto ?? " ",
        id: signUpResponse.user._id,
      },
      token: signUpResponse.token,
    };
  } catch (error) {
    return rejectWithValue(
      (error as Error).message || "An error occurred during login."
    );
  }
});

const authSlice = createSlice({
  name: "auth",
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
        state.error = action.payload || "An error occurred during login.";
        state.isAuthLoading = false;
      });
  },
});

export const { logout, setUser } = authSlice.actions; 
export default authSlice.reducer;