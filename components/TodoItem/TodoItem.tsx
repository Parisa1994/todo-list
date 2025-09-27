"use client";

import React from "react";

interface TodoItemProps {
  text: string;
  done: boolean;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, done, onToggle }) => {
  return (
    <li
      style={{
        textDecoration: done ? "line-through" : "none",
        cursor: "pointer",
        marginBottom: "0.5rem",
      }}
      onClick={onToggle}
    >
      {text}
    </li>
  );
};

export default TodoItem;
