
// @ts-nocheck
import { fn } from "storybook/test";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,

	//기본 클릭
  args: {
    onClick: fn(),
    label: "Button",
    variant: "primary",
    size:"md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
	},
};

export const Small = {
  args: {
    label: "Small",
    size: "sm",
  },
};

export const Large = {
  args: {
    label: "Large",
    size: "lg",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

