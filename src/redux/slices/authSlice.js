import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // State updates
    setUser: (state, action) => {
      state.user = action.payload || null;
    },
    clearUser: (state) => {
      state.user = null;
    },

    // Trigger-only actions handled by saga
    login: (_state, _action) => {},
    logout: (_state) => {},
    restoreAuth: (_state) => {},
  },
});

export const { setUser, clearUser, login, logout, restoreAuth } = authSlice.actions;

export default authSlice.reducer;


