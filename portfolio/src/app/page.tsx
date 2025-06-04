import styles from "./_style/header.module.css";
import Nav from "./_component/nav";
import Profile from "./_component/profile";

export default function Home() {
  return (
    <div className={styles.body}>
      <Nav userName="HanJunseo"/>
      <Profile />
    </div>
  );
}
