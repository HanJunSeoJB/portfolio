import styles from "./_style/header.module.css";
import Nav from "./_component/nav";

export default function Home() {
  return (
    <div className={styles.body}>
      <Nav userName="HanJunseo"/>
      <h1>Hello admin</h1>
      <p className={styles.content}>Welcome to the portfolio page.</p>
      <p className={styles.content}>Welcome to the portfolio page.</p>
      <p className={styles.content}>Welcome to the portfolio page.</p>
      <p className={styles.content}>Welcome to the portfolio page.</p>
      <p className={styles.content}>Welcome to the portfolio page.</p>
      <p className={styles.content}>Welcome to the portfolio page.</p>
      <p className={styles.content}>Welcome to the portfolio page.</p>
    </div>
  );
}
