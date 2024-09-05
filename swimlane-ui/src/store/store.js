import { configureStore } from '@reduxjs/toolkit';
import blocksReducer from '../features/blocksSlice';
import configReducer from '../features/configSlice';

const store = configureStore({
  reducer: {
    blocks: blocksReducer,
    config: configReducer,
  },
});

export default store;
