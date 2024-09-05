import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const blocksSlice = createSlice({
  name: "blocks",
  initialState: {
    items: [
      { id: uuidv4(), title: "Task 1", description: "Description 1", status: "to-do" },
      { id: uuidv4(), title: "Task 2", description: "Description 2", status: "in-progress" },
    ],
  },
  reducers: {
    addBlock: (state, action) => {
      state.items.push({ id: uuidv4(), ...action.payload });
    },
    updateBlock: (state, action) => {
      const index = state.items.findIndex((block) => block.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...action.payload };
      }
    },
    deleteBlock: (state, action) => {
      state.items = state.items.filter((block) => block.id !== action.payload);
    },
  },
});

export const { addBlock, updateBlock, deleteBlock } = blocksSlice.actions;
export default blocksSlice.reducer;
