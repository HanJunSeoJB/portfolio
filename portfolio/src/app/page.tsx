import styles from "./_style/header.module.css";
import Nav from "./_component/_Header/nav";
import Profile from "./_component/_Profile/profile";

export default function Home() {
  return (
    <div className={styles.body}>
      <Nav userName="HanJunseo"/>
      <Profile />
    </div>
  );
}
