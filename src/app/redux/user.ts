import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../app/types/serverTypes';
import { SIGN_IN, SIGN_UP } from '../lib/profileConnections';
import client from '../lib/client';
import { getServerErrorCode } from '../../utils/validation';
import { ApolloError } from '@apollo/client';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (credentials: { email: string; password: string; commandId: string }) => {
    const response = await client.mutate({
      mutation: SIGN_UP,
      variables: credentials,
    });
    return response.data;
  }
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async (credentials: { email: string; password: string; commandId: string }) => {
    const response = await client.mutate({
      mutation: SIGN_IN,
      variables: credentials,
    });
    return response.data;
  }
);

export type Credential = {
  email: string;
  password: string;
};

type initialStateType = {
  status: 'loading' | 'resolve' | 'rejected';
  error: string;
  user: User;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      name: undefined,
      id: undefined,
      about: undefined,
      email: undefined,
      signUpDate: undefined,
    },
    error: undefined,
    status: undefined,
  } as initialStateType,
  reducers: {
    setInfo: (state, action) => {
      const user = action.payload.profile;
      state.user.email = user.email;
      state.user.signUpDate = user.signUpDate;

      console.log(state.user.email);
      console.log(state.user.about);
      console.log(state.user.signUpDate);
    },
    clearError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'resolve';
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message ?? 'Error.' + getServerErrorCode(action.error as ApolloError);
    });
    builder.addCase(signIn.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.status = 'resolve';
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message ?? 'Error.' + getServerErrorCode(action.error as ApolloError);
    });
  },
});

export const userActions = userSlice.actions;
export const user = userSlice.reducer;
