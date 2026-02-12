import { fn } from "@storybook/test";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    checked: false,
    disabled: false,
    label: "텍스트",
    onChange: fn(),
  },
};

export const Default = {};
export const Checked = { args: { checked: true } };
export const Disabled = { args: { disabled: true } };
export const DisabledChecked = { args: { disabled: true, checked: true } };
