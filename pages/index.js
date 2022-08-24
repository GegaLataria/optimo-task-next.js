import styles from "../styles/Employees.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.header}>
        <span className={styles.title}>Optimo Group</span>
      </h1>
      <h2 className={styles.slogan}>We deliver Tomorrow's Solutions Today</h2>
    </div>
  );
}
