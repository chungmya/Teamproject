import React from "react";
import styles from "./Checkbox.module.scss";

export function Checkbox({
  checked,
  defaultChecked = false,
  disabled = false,
  label,
  onChange,
}) {
  const isControlled = checked !== undefined;

  return (
    <label className={styles.wrap}>
      <input
        type="checkbox"
        className={styles.input}
        checked={isControlled ? checked : undefined}
        defaultChecked={!isControlled ? defaultChecked : undefined}
        disabled={disabled}
        onChange={onChange}
      />
      <span className={styles.box} aria-hidden="true" />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
