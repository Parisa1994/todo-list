import { Meta, StoryObj } from "@storybook/nextjs";

import TodoItem from "./TodoItem";

const meta: Meta<typeof TodoItem> = {
  title: "Components/TodoItem",
  component: TodoItem,
};

export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Default: Story = {
  args: {
    text: "Learn Storybook",
    done: false,
    onToggle: () => alert("Toggled!"),
  },
};

export const Done: Story = {
  args: {
    text: "Completed Task",
    done: true,
    onToggle: () => alert("Toggled!"),
  },
};
