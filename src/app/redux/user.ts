import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../app/types/serverTypes';
import { SIGN_UP } from '../lib/api/profileConnections';
import client from '../lib/client';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (credentials: {email: string, password: string, commandId: string}) => {
    const response = await client.mutate({
            mutation: SIGN_UP,
            variables: credentials});
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
      state.error = action.payload as string;
    });
  },
});

export const userActions = userSlice.actions;
export const user = userSlice.reducer;
