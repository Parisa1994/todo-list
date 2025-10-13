"use client";

import React, { useState } from "react";
import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  text: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  text,
  done,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleSave = () => {
    const trimmed = value.trim();
    if (trimmed && trimmed !== text) onEdit(trimmed);
    setIsEditing(false);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setValue(text);
      setIsEditing(false);
    }
  };

  return (
    <Box
      component="li"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLLIElement).style.backgroundColor = done
          ? "#c2ffc3"
          : "#eaeaea";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLLIElement).style.backgroundColor = done
          ? "#d1ffd6"
          : "#f4f4f4";
      }}
      sx={{
        listStyle: "none",
        mb: "0.5rem",
        p: "0.5rem 1rem",
        borderRadius: "8px",
        bgcolor: done ? "#d1ffd6" : "#f4f4f4",
        transition: "background-color 0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
      }}
    >
      {isEditing ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: 1 }}>
          <TextField
            autoFocus
            fullWidth
            size="small"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Tooltip title="Save (Enter)">
            <IconButton aria-label="save" onClick={handleSave}>
              <CheckIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancel (Esc)">
            <IconButton
              aria-label="cancel"
              onClick={() => {
                setValue(text);
                setIsEditing(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <>
          <Box
            onClick={onToggle}
            sx={{
              textDecoration: done ? "line-through" : "none",
              cursor: "pointer",
              flex: 1,
              pr: 2,
              userSelect: "none",
            }}
          >
            {text}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Tooltip title="Edit">
              <IconButton aria-label="edit" onClick={() => setIsEditing(true)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton aria-label="delete" onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TodoItem;
