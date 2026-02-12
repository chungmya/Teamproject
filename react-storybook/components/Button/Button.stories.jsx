import React from "react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

//아이콘 추가
import { CiEdit, CiCircleRemove, CiSquareCheck } from "react-icons/ci";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],

  args: {
    onClick: fn(),
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export const Default = {
  args: { children: "Button" },
};

export const Small = {
  args: { children: "Small", size: "sm" },
};

export const Large = {
  args: { children: "Large", size: "lg" },
};

export const Disabled = {
  args: { children: "Disabled", disabled: true },
};

export const EditButton = {
  args: {
    variant: "secondary",
    children: (
      <>
        <CiEdit /> 수정
      </>
    ),
  },
};

export const CompleteButton = {
  args: {
    variant: "secondary",
    children: (
      <>
        <CiSquareCheck /> 수정완료
      </>
    ),
  },
};

export const DeleteButton = {
  args: {
    variant: "secondary",
    children: (
      <>
        <CiCircleRemove /> 삭제
      </>
    ),
  },
};
