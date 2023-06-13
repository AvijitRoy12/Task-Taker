import React from "react";

import Button, { ButtonProps } from "../components/Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "disabled",
  children: "Disabled Button",
  disabled: true,
};
