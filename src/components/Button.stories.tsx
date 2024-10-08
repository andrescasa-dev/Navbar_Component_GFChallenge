import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { RiMenuFill } from "@remixicon/react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  // argTypes: {
  //   children: { control: "text" },
  // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    variant: "primary",
    children: "Allow cookies",
  },
};

export const PrimaryLink: Story = {
  args: {
    href: "#",
    disabled: false,
    variant: "primary",
    children: "Allow cookies",
  },
};

export const Secondary: Story = {
  args: {
    disabled: false,
    variant: "secondary",
    children: "Allow cookies",
  },
};

export const Icon: Story = {
  args: {
    disabled: false,
    variant: "icon",
    children: <RiMenuFill aria-label="Open Navigation" />,
  },
};

export const Link: Story = {
  args: {
    disabled: false,
    variant: "link",
    children: "features",
    href: "#",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: "secondary",
    children: "Allow cookies",
  },
};
