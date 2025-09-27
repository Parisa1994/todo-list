import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

const sizeMeta = {
  title: 'کامپوننت ها/دکمه/سایز',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    color: 'primary',
    variant: 'contained'
  }
} satisfies Meta<typeof Button>;

export default sizeMeta;
type Story = StoryObj<typeof sizeMeta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  name: 'کوچک',
  args: {
    children: 'دکمه کوچک',
    size: 'small'
  }
};

export const Disabled: Story = {
  name: 'متوسط',
  args: {
    children: 'دکمه متوسط',
    size: 'medium'
  }
};

export const Primary: Story = {
  name: 'بزرگ',
  args: {
    children: 'دکمه بزرگ',
    size: 'large'
  }
};
