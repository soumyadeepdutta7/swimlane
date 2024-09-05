import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allowedTransitions: {
    'to-do': ['in-progress'],
    'in-progress': ['done'],
    'done': [],
  },
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
});

export default configSlice.reducer;
