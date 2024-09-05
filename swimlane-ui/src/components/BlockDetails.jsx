import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const BlockDetails = ({ block }) => {
  return (
    <Box p={4} bg="gray.100" borderRadius={8}>
      <Text>Block {block.id}</Text>
      <VStack align="left">
        {block.history.map((entry, index) => (
          <Text key={index}>{entry.stage} - {entry.date.toString()}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default BlockDetails;
