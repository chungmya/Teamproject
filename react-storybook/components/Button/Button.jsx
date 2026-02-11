import React from "react";
import styles from "./Button.module.scss";

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  disabled,
}) {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : "",
  ]
    .filter(Boolean)
    .join(" ");

  // 링크형 버튼
  if (href) {
    return (
      <a href={href} className={className} aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  // 일반 버튼
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
