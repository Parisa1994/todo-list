"use client";

import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        maxWidth="500px"
        width="100%"
        mx="auto"
      >
        <TextField
          variant="outlined"
          size="medium"
          placeholder="Add a new todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            flex: 1,
            py: 1.5,
            "& .MuiInputBase-input": {
              fontSize: "1rem",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

export default TodoInput;
