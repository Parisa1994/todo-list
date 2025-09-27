import TodoList from "@/components/TodoList/TodoList";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Todo List</h1>
      <TodoList />
    </div>
  );
}
