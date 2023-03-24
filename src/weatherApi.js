import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action:
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&units=imperial,&APPID=9d4bc884118c415fc015ad23d6dec881`
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;

      return rejectWithValue(error?.response?.data);
    }
  }
);

// Slice:
const weatherApi = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: (builder) => {
    // Pending:
    builder.addCase(fetchWeatherAction.pending, (state, action) => {});

    // Fulfilled:
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.error = null;
    });

    // Rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.weather = null;
      state.error = action?.payload;
    });
  },
});

export default weatherApi;
