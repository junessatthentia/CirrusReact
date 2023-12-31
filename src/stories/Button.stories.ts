import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Secondary / Outline',
  },
};

export const XSmall: Story = {
  args: {
    size: 'tc-btn-xs',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'btn-sm',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'btn-lg',
    label: 'Large Button',
  },
};


export const Danger: Story = {
  args: {
    primary: true,
    label: 'Dangerous Action',
    level: 'danger',
  }
};