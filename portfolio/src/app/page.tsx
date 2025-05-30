import styles from "./_style/header.module.css";
import Nav from "./_component/nav";

export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Nav userName="HanJunseo"/>
      </header>
      <h1>Hello admin</h1>
    </div>
  );
}
