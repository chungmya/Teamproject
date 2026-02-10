import React from "react";
import styles from "./Checkbox.module.scss";

export function Checkbox({
  checked = false,
  disabled = false,
  label,
  onChange,
}) {
  return (
    <label className={styles.wrap}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={styles.box} aria-hidden="true" />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
