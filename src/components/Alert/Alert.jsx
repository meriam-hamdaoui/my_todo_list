import styles from "./Alert.module.css";

export default function Alert({ children, onClear }) {
  return (
    <div className={styles.Alert}>
      {children}
      <span onClick={onClear}>x</span>
    </div>
  );
}
