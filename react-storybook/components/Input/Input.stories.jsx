//import { fn } from "@storybook/test";
import React from "react";
import { Input } from "./Input";
import { Button } from "../Button/Button";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
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
    fullWidth: { control: "boolean" },
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

export const fullWidth = {
  args: { size: "full" },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", padding: "16px", boxSizing: "border-box" }}>
        <Story />
      </div>
    ),
  ],
};

//버튼이랑 같이 있을때 타입
export const WithButton = {
  args: { fullWidth: true },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "1rem", width: 400 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Story />
        </div>
        <Button>추가</Button>
      </div>
    ),
  ],
};
