import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
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
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Light: Story = {
  args: {
    links: [
      {label:"Home", url:"/index.html"},
      {label:"Link", url:"#0"},
      {label:"Current Page", url:"#1"},
    ],
    light: true,
  },
};

export const Dark: Story = {
  args: {
    links: [
      {label:"Home", url:"/index.html"},
      {label:"Link", url:"#0"},
      {label:"Current Page", url:"#1"},
    ],
  },
};