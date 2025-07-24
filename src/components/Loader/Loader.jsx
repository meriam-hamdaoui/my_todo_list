import styles from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={styles.Backdrop}>
      <div className={styles.Loader} />
    </div>
  );
}
