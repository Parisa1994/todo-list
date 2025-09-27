"use client";

import React, { useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoItem from "../TodoItem/TodoItem";
import { Box, Typography } from "@mui/material";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        mx: "auto",
        mt: 6,
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h4" mb={3} textAlign="center">
        My Todo List
      </Typography>
      <TodoInput onAdd={addTodo} />
      <Box component="ul" sx={{ listStyle: "none", p: 0, mt: 3 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleTodo(todo.id)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TodoList;
