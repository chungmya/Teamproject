import React from "react";
import styles from "./Input.module.scss";

export function Input({
  value,
  defaultValue,
  placeholder = "입력하세요",
  disabled = false,
  error = false,
  errorMessage = "입력값을 입력해주세요!",
  size = "md", // "sm" | "md" | "lg"
  onChange,
}) {
  const wrapClass = [styles.wrap, styles[size], error ? styles.error : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass}>
      <input
        className={styles.input}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error}
        onChange={onChange}
      />
      {error && <p className={styles.message}>{errorMessage}</p>}
    </div>
  );
}
