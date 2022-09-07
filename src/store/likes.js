import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiConfig from '../config/api';

export const likeVideo = createAsyncThunk(
  'likes/create',
  async (videoId, thunkAPI) => {
    let token;
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject('No token');
    }

    if (!token) {
      return Promise.reject('No token');
    }

    let response = await axios.post(
      `${apiConfig.domain}/likes`,
      {
        like: {
          videoId: videoId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

let likesSlice = createSlice({
  name: 'like',
  initialState: {
    status: '',
    data: {},
  },
  extraReducers: {
    [likeVideo.fulfilled]: (state, action) => {
      state.status = 'success';
      state.data = action.payload;
    },
  },
});

export default likesSlice.reducer;
