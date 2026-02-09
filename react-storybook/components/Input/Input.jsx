import React from "react";
import styles from "./Input.module.scss";

export function Input({
  value,
  defaultValue,
  placeholder = "입력하세요",
  disabled = false,
  error = false,
  size = "md", // "sm" | "md" | "lg"
  onChange,
}) {
  const className = [styles.input, styles[size], error ? styles.error : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      className={className}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      aria-invalid={error}
      onChange={onChange}
    />
  );
}
