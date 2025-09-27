import { Meta, StoryObj } from "@storybook/nextjs";

import { PiAcornFill } from "react-icons/pi";

import { Button } from "../Button";

const outlinedMeta = {
  title: "کامپوننت ها/دکمه/توخالی",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { variant: "outlined" },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof outlinedMeta>;

export default outlinedMeta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  name: "پایه/پیش فرض",
  args: {
    color: "inherit",
    children: "دکمه",
  },
};

export const Disabled: Story = {
  name: "پایه/غیرفعال",
  args: {
    disabled: true,
    children: "دکمه غیرفعال",
  },
};

export const Primary: Story = {
  name: "پایه/برند",
  args: {
    children: "دکمه برند",
  },
};

export const Link: Story = {
  name: "پایه/تکمیلی",
  args: {
    children: "دکمه تکمیلی",
    color: "secondary",
  },
};

export const DefaultColor: Story = {
  name: "رنگ/پیش فرض",
  args: {
    children: "پیش فرض",
    color: "inherit",
  },
};

export const PrimaryColor: Story = {
  name: "رنگ/برند",
  args: {
    children: "برند",
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  name: "رنگ/تکمیلی",
  args: {
    children: "تکمیلی",
    color: "secondary",
  },
};

export const InfoColor: Story = {
  name: "رنگ/اطلاع رسانی",
  args: {
    children: "اطلاع رسانی",
    color: "info",
  },
};

export const SuccessColor: Story = {
  name: "رنگ/موفقیت",
  args: {
    children: "موفقیت",
    color: "success",
  },
};
export const WarningtColor: Story = {
  name: "رنگ/هشدار",
  args: {
    children: "هشدار",
    color: "warning",
  },
};
export const ErrortColor: Story = {
  name: "رنگ/خطا",
  args: {
    children: "خطا",
    color: "error",
  },
};
export const Warning: Story = {
  name: "رنگ/لینک",
  args: {
    children: "لینک",
  },
};

export const LeftIcon: Story = {
  name: "آیکون/چپ",
  args: {
    children: "آیکون چپ",
    endIcon: <PiAcornFill />,
    color: "error",
  },
};
export const RightIcon: Story = {
  name: "آیکون/راست",
  args: {
    startIcon: <PiAcornFill />,
    children: "آیکون راست",
    color: "error",
  },
};
export const BothIcon: Story = {
  name: "آیکون/دو طرف",
  args: {
    endIcon: <PiAcornFill />,
    startIcon: <PiAcornFill />,
    children: "آیکون دوطرف",
    color: "error",
  },
};

export const Loading: Story = {
  name: "لودینگ/پایه",
  args: { loading: true, children: "something" },
};

export const LoadingText: Story = {
  name: "لودینگ/متنی",
  args: {
    loadingIndicator: "درحال بارگزاری...",
    loading: true,
    loadingPosition: "center",
    sx: { minWidth: 185 },
    children: "something",
  },
};

export const LeftLoading: Story = {
  name: "لودینگ/چپ",
  args: {
    children: "لودینگ چپ",
    loadingPosition: "end",
    endIcon: <PiAcornFill />,
    loading: true,
  },
};

export const RightLoading: Story = {
  name: "لودینگ/راست",
  args: {
    children: "لودینگ راست",
    loadingPosition: "start",
    startIcon: <PiAcornFill />,
    loading: true,
  },
};
