import { createSelector } from 'reselect';

const selectBlocks = (state) => state.blocks.blocks;

export const selectFilteredBlocks = createSelector(
  [selectBlocks, (state, searchTerm) => searchTerm],
  (blocks, searchTerm) => {
    return blocks.filter((block) =>
      block.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);
