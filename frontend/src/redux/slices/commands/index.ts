import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Server, Session } from "../../../types/commands/ServerTypes";

interface ServerState {
  data: Server[]; // Replace `any` with a specific type if possible
  loading: boolean;
  error: string | null;
}

interface ActiveSessionState {
  data: Session[]; // Replace `any` with a specific type if possible
  loading: boolean;
  error: string | null;
}

interface InitialState {
  servers: ServerState;
  activeSession: ActiveSessionState;
}

const initialState: InitialState = {
  servers: {
    data: [],
    loading: false,
    error: null,
  },
  activeSession: {
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
    getServersSuccess: (state, action: PayloadAction<any[]>) => {
      state.servers.loading = false;
      state.servers.error = null;
      state.servers.data = action.payload;
    },
    getServersFailure: (state, action: PayloadAction<any>) => {
      state.servers.loading = false;
      state.servers.error = action.payload;
      state.servers.data = [];
    },
    addSession: (state, action: PayloadAction<Session>) => {
      state.activeSession.data.push(action.payload);
    },
    closeSession: (state, action: PayloadAction<Session>) => {
      state.activeSession.data = state.activeSession.data.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  getServers,
  getServersSuccess,
  getServersFailure,
  addSession,
  closeSession,
} = commandSlice.actions;

export default commandSlice.reducer;
