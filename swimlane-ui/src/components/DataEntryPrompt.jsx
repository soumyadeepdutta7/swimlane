import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlock } from "../features/blocksSlice";
import { Button, Input, Textarea } from "@chakra-ui/react";

const DataEntryPrompt = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddBlock = () => {
    dispatch(addBlock({ title, description, stage: "todo" }));
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        mb={2}
      />
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Button onClick={handleAddBlock} className="add-block-btn">
        Add Block
      </Button>
    </div>
  );
};

export default DataEntryPrompt;
