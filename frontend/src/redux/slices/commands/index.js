import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servers: {
    data: [],
    loading: false,
    error: null,
  },
};

const commandSlice = createSlice({
  name: "Commands",
  initialState,
  reducers: {
    getServers: (state) => {
      state.servers.loading = true;
    },
    getServersSuccess: (state, action) => {
      state.servers.loading = false;
      state.servers.error = null;
      state.servers.data = action.payload;
    },
    getServersFailure: (state, action) => {
      state.servers.loading = false;
      state.servers.error = action.payload;
      state.servers.data = [];
    },
  },
});

export const { getServers, getServersSuccess, getServersFailure } =
  commandSlice.actions;

export default commandSlice.reducer;
