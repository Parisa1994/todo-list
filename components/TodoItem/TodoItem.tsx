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
      onClick={onToggle}
      style={{
        textDecoration: done ? "line-through" : "none",
        cursor: "pointer",
        marginBottom: "0.5rem",
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        backgroundColor: done ? "#d1ffd6" : "#f4f4f4",
        transition: "background-color 0.3s",
      }}
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
    >
      {text}
    </li>
  );
};

export default TodoItem;
