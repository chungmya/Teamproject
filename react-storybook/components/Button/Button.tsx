import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
