import React from "react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

//아이콘 추가
import { CiEdit, CiCircleRemove, CiSquareCheck } from "react-icons/ci";

export default {
  title: "Components/Button",
  component: Button,

  args: {
    onClick: fn(),
    label: "Button",
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
    children: (
      <>
        <CiSquareCheck /> 완료
      </>
    ),
  },
};

export const DeleteButton = {
  args: {
    variant: "danger",
    children: (
      <>
        <CiCircleRemove /> 삭제
      </>
    ),
  },
};
