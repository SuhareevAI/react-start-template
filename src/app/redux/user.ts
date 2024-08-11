import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: JSON.parse(localStorage.getItem('user'))?.login,
    about: JSON.parse(localStorage.getItem('user'))?.about,
  },
  reducers: {
    setInfo: () => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          login: 'test_login',
          about:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        })
      );
    },
    clearInfo: () => {
      localStorage.removeItem('user');
    },
  },
});

export const userActions = userSlice.actions;
export const user = userSlice.reducer;
