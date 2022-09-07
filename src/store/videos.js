import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import apiConfig from '../config/api';

const innerLoadVideos = async (path, thunkAPI) => {
  let token;
  try {
    token = thunkAPI.getState().user.user.jwtToken;
  } catch {
    return Promise.reject('No token');
  }

  if (!token) {
    return Promise.reject('No token');
  }

  let response = await axios.get(`${apiConfig.domain}/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const loadVideos = createAsyncThunk(
  'videos/load',
  async (page = 1, thunkAPI) => {
    return innerLoadVideos(`videos?page=${page}`, thunkAPI);
  }
);

export const loadVideosForUser = createAsyncThunk(
  'videos/user/load',
  async (_, thunkAPI) => {
    return innerLoadVideos(`users/videos`, thunkAPI);
  }
);

export const getVideo = createAsyncThunk(
  'videos/get',
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

    let response = await axios.get(`${apiConfig.domain}/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

export const createVideo = createAsyncThunk(
  'videos/create',
  async (videoData, thunkAPI) => {
    let token;
    try {
      token = thunkAPI.getState().user.user.jwtToken;
    } catch {
      return Promise.reject('No token');
    }

    if (!token) {
      return Promise.reject('No token');
    }

    let response = await axios.post(`${apiConfig.domain}/videos`, videoData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

let videosSlice = createSlice({
  name: 'videos',
  initialState: {
    status: '',
    data: {
      videos: [],
      nextPage: 1,
      total: 1,
    },
    currentVideo: null,
  },
  reducers: {},
  extraReducers: {
    [loadVideos.fulfilled]: (state, action) => {
      const { currentPage, nextPage, prevPage, total } = action.payload;
      state.status = 'success';
      state.data = {
        currentPage,
        nextPage,
        prevPage,
        total,
        videos: state.data.videos.concat(action.payload.videos),
      };
    },
    [getVideo.fulfilled]: (state, action) => {
      state.status = 'success';
      state.currentVideo = action.payload;
    },
    [loadVideosForUser.fulfilled]: (state, action) => {
      state.status = 'success';
      state.data.videos = action.payload;
    },
  },
});

export default videosSlice.reducer;
