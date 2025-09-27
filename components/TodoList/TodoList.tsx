"use client";

import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";

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
    <div>
      <TodoInput onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            done={todo.done}
            onToggle={() => toggleTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
