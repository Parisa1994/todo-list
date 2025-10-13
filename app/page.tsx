"use client";
import TodoList from "@/components/TodoList/TodoList";

// @mui
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        py: 12,
        m: "auto",
        maxWidth: 400,
        minHeight: "100vh",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <TodoList />
    </Container>
  );
}
