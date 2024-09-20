import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";

const meta = {
  title: "Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {},
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  args: {},
};

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "default",
    },
  },
  args: {},
};
