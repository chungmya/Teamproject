import { fn } from "@storybook/test";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    checked: false,
    disabled: false,
    label: "완료",
    onChange: fn(),
  },
};

export const Default = {};
export const Checked = { args: { checked: true } };
export const Disabled = { args: { disabled: true } };
export const DisabledChecked = { args: { disabled: true, checked: true } };
