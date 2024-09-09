import React from "react";
import { useDrag } from "react-dnd";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const Block = ({ block, onEdit }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "BLOCK",
    item: { block }, 
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      bg={isDragging ? "blue.200" : block.status === "to-do" ? "red.300" : block.status === "in-progress" ? "yellow.300" : "green.300"}
      p={4}
      mb={4}
      borderRadius="md"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.400"
      position="relative"
      opacity={isDragging ? 0.5 : 1}
      transition="all 0.3s ease" 
      _hover={{
        bg: block.status === "to-do" ? "red.400" : 
            block.status === "in-progress" ? "yellow.400" : 
            "green.400",
        transform: "scale(1.05)", 
        boxShadow: "md", 
        cursor: "pointer" 
      }}
    >
      <Text fontWeight="bold" fontSize="md" mb={2}>
        {block.title}
      </Text>
      <Text fontSize="sm" mb={2}>
        {block.description}
      </Text>
      <Text fontSize="xs" color="gray.600">
        Created at: {new Date(block.createdAt).toLocaleString()}
      </Text>
      <IconButton
        aria-label="Edit Block"
        icon={<EditIcon />}
        position="absolute"
        top="4px"
        right="4px"
        size="sm"
        onClick={onEdit}
      />
    </Box>
  );
};

export default Block;
