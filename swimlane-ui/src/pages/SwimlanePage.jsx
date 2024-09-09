import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Input, Grid, Heading, Flex, Link } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { addBlock, updateBlock, moveBlock, deleteBlock } from "../features/blocksSlice";
import Swimlane from "../components/Swimlane";
import AddEditBlockModal from "../components/AddEditBlockModal";

const SwimlanePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blockToEdit, setBlockToEdit] = useState(null);
  const dispatch = useDispatch();
  const blocks = useSelector((state) => state.blocks.items);

  const filteredBlocks = blocks.filter((block) =>
    (block.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBlock = (block) => {
    dispatch(addBlock({ ...block, status: "to-do" }));
  };

  const handleEditBlock = (block) => {
    if (blockToEdit) {
      dispatch(updateBlock({ ...blockToEdit, ...block }));
    }
  };

  const handleMoveBlock = (id, status) => {
    dispatch(moveBlock({ id, status }));
  };

  const handleDeleteBlock = (id) => {
    dispatch(deleteBlock(id));
    closeModal();
  };

  const openModal = (block = null) => {
    setBlockToEdit(block);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBlockToEdit(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        p={5}
        bgGradient="linear(to-r, teal.400, blue.500)"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* Navbar */}
        <Flex
          as="nav"
          width="100%"
          bg="gray.800"
          p={4}
          boxShadow="md"
          justify="space-between"
          align="center"
          position="fixed"
          top="0"
          zIndex="1000"
        >
          <Heading size="lg" color="white">
            Swimlane
          </Heading>
          <Flex gap={4}>
            <Link href="#" fontWeight="bold" color="white" _hover={{ color: "gray.400" }}>
              Home
            </Link>
            <Link href="#" fontWeight="bold" color="white" _hover={{ color: "gray.400" }}>
              About
            </Link>
            <Link href="#" fontWeight="bold" color="white" _hover={{ color: "gray.400" }}>
              Contact
            </Link>
          </Flex>
        </Flex>

        {/* Main container */}
        <Box
          mt="80px"
          bg="whiteAlpha.900"
          borderRadius="lg"
          p={8}
          width="100%"
          maxWidth="1200px"
          boxShadow="lg"
        >
          <Heading mb={6} color="blue.600" textAlign="center">
            Swimlane Task Manager
          </Heading>

          <Input
            placeholder="Search tasks..."
            mb={5}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            boxShadow="md"
            borderRadius="md"
            borderColor="blue.300"
            _hover={{ borderColor: "blue.500" }}
            _focus={{ borderColor: "blue.500" }}
          />

          <Button
            colorScheme="blue"
            onClick={() => openModal()}
            mb={5}
            boxShadow="md"
            _hover={{ bg: "blue.600" }}
          >
            Add New Block
          </Button>

          {/* Swimlanes Grid */}
          <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6} mt={5}>
            {["to-do", "in-progress", "done"].map((status) => (
              <Swimlane
                key={status}
                status={status}
                blocks={filteredBlocks.filter(
                  (block) => block.status === status
                )}
                onEdit={openModal}
                onMove={handleMoveBlock} 
              />
            ))}
          </Grid>
        </Box>

        {/* Modal for Adding/Editing Blocks */}
        <AddEditBlockModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={blockToEdit ? handleEditBlock : handleAddBlock}
          onDelete={handleDeleteBlock}
          blockToEdit={blockToEdit}
        />
      </Box>
    </DndProvider>
  );
};

export default SwimlanePage;
