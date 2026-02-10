//import { fn } from "@storybook/test";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "할 일을 입력하세요",
    size: "md",
    disabled: false,
    error: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export const Default = {
  args: {},
};

export const Error = {
  args: {
    error: true,
    placeholder: "필수 입력입니다",
    errorMessage: "할일을 입력해주세요!",
  },
};

export const Disabled = {
  args: { disabled: true, value: "비활성화 상태입니다." },
};

export const Small = {
  args: { size: "sm" },
};

export const Large = {
  args: { size: "lg" },
};
