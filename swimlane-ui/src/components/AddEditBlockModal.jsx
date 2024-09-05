import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";

const AddEditBlockModal = ({ isOpen, onClose, onSubmit, onDelete, blockToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (blockToEdit) {
      setTitle(blockToEdit.title || ""); // Ensure the value is never undefined
      setDescription(blockToEdit.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [blockToEdit]);

  const handleSubmit = () => {
    onSubmit({ title, description });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{blockToEdit ? "Edit Block" : "Add Block"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={3}
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          {blockToEdit && (
            <Button colorScheme="red" onClick={() => onDelete(blockToEdit.id)} mr={3}>
              Delete
            </Button>
          )}
          <Button colorScheme="blue" onClick={handleSubmit}>
            {blockToEdit ? "Save" : "Add"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddEditBlockModal;
