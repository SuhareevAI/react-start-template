import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category } from 'src/entities/Category/Model/Category';
import client from '../lib/client';
import { GET_CATEGORIES } from '../lib/api/categoriesConnections';

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
    async () => {
        const response = await client.query({query: GET_CATEGORIES});
        return response.data.categories.getMany.data;
    }
);

type initialStateType = {
  status: 'loading' | 'resolve' | 'rejected';
  error: string;
  categories: Category[];
};

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    error: undefined,
    status: undefined,
  } as initialStateType,
  reducers: {
    set: (state, action) => {
      state.categories = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = 'resolve';
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export const categoryActions = categorySlice.actions;
export const category = categorySlice.reducer;
