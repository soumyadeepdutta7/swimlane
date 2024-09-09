import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Load blocks from local storage or default to initial state
const loadBlocksFromLocalStorage = () => {
  const savedBlocks = localStorage.getItem("blocks");
  return savedBlocks ? JSON.parse(savedBlocks) : [];
};

const saveBlocksToLocalStorage = (blocks) => {
  localStorage.setItem("blocks", JSON.stringify(blocks));
};

const blocksSlice = createSlice({
  name: "blocks",
  initialState: {
    items: loadBlocksFromLocalStorage(),
  },
  reducers: {
    addBlock: (state, action) => {
      const newBlock = { 
        id: uuidv4(), 
        ...action.payload, 
        createdAt: new Date().toISOString(),  
        history: [] 
      };
      state.items.push(newBlock);
      saveBlocksToLocalStorage(state.items);
    },
    updateBlock: (state, action) => {
      const index = state.items.findIndex((block) => block.id === action.payload.id);
      if (index !== -1) {
        const block = state.items[index];
        const historyEntry = {
          stage: block.status,
          date: new Date().toISOString(),
          change: "Edited"
        };
        state.items[index] = { ...action.payload, history: [...block.history, historyEntry] };
        saveBlocksToLocalStorage(state.items);
      }
    },
    moveBlock: (state, action) => {
      const index = state.items.findIndex((block) => block.id === action.payload.id);
      if (index !== -1) {
        const block = state.items[index];
        const historyEntry = {
          stage: action.payload.status,
          date: new Date().toISOString(),
          change: "Moved"
        };
        state.items[index].status = action.payload.status;
        state.items[index].history.push(historyEntry);
        saveBlocksToLocalStorage(state.items);
      }
    },
    deleteBlock: (state, action) => {
      state.items = state.items.filter((block) => block.id !== action.payload);
      saveBlocksToLocalStorage(state.items);
    },
  },
});

export const { addBlock, updateBlock, moveBlock, deleteBlock } = blocksSlice.actions;
export default blocksSlice.reducer;
