import { Meta, StoryObj } from "@storybook/nextjs";

import { PiAcornFill } from "react-icons/pi";

import IconButton from "../IconButton";

const iconButtonMeta = {
  title: "کامپوننت ها/دکمه/دکمه آیکون",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { children: <PiAcornFill /> },
} satisfies Meta<typeof IconButton>;

export default iconButtonMeta;

type Story = StoryObj<typeof iconButtonMeta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Large: Story = {
  name: "سایز/بزرگ",
  args: {
    color: "primary",
    size: "large",
  },
};

export const Medium: Story = {
  name: "سایز/متوسط",
  args: {
    color: "primary",
    size: "medium",
  },
};

export const Small: Story = {
  name: "سایز/کوچک",
  args: {
    color: "primary",
  },
};
export const PrimaryColor: Story = {
  name: "رنگ/برند",
  args: {
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  name: "رنگ/تکمیلی",
  args: {
    color: "secondary",
  },
};

export const InfoColor: Story = {
  name: "رنگ/اطلاع رسانی",
  args: {
    color: "info",
  },
};

export const SuccessColor: Story = {
  name: "رنگ/موفقیت",
  args: {
    color: "success",
  },
};
export const WarningtColor: Story = {
  name: "رنگ/هشدار",
  args: {
    color: "warning",
  },
};
export const ErrortColor: Story = {
  name: "رنگ/خطا",
  args: {
    color: "error",
  },
};
