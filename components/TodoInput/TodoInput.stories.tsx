import { Meta, StoryObj } from "@storybook/nextjs";

import TodoInput from "./TodoInput";

const meta: Meta<typeof TodoInput> = {
  title: "Components/TodoInput",
  component: TodoInput,
};

export default meta;

type Story = StoryObj<typeof TodoInput>;

export const Default: Story = {
  args: {
    onAdd: (text: string) => alert(`Added: ${text}`),
  },
};
