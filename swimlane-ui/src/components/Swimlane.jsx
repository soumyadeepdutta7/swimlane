import React from "react";
import { useDrop } from "react-dnd";
import { Box, Text } from "@chakra-ui/react";
import Block from "./Block";
import { useDispatch } from "react-redux";
import { updateBlock } from "../features/blocksSlice";

const Swimlane = ({ status, blocks, onEdit }) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: "BLOCK",
    drop: (item) => moveBlock(item.block, status), 
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const moveBlock = (block, newStatus) => {
    // Update the status of the whole block while retaining its title, description, etc.
    dispatch(updateBlock({ ...block, status: newStatus }));
  };

  return (
    <Box
      ref={drop}
      bg={isOver ? "gray.300" : "gray.50"}
      p={4}
      borderRadius="md"
      boxShadow="md"
      minHeight="200px"
      border="1px solid"
      borderColor="gray.400"
    >
      <Text fontWeight="bold" fontSize="lg" mb={3}>
        {status.replace("-", " ").toUpperCase()}
      </Text>
      {blocks.map((block) => (
        <Block key={block.id} block={block} onEdit={() => onEdit(block)} />
      ))}
    </Box>
  );
};

export default Swimlane;
