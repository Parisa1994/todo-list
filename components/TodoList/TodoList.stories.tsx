import { Meta, StoryObj } from "@storybook/nextjs";
import TodoList from "./TodoList";

const meta: Meta<typeof TodoList> = {
  title: "Components/TodoList",
  component: TodoList,
};

export default meta;

type Story = StoryObj<typeof TodoList>;

export const Default: Story = {};
