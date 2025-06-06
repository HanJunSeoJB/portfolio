import styles from "./_style/header.module.css";
import Profile from "./_component/_Profile/profile";
import Nav from "./_component/_Header/nav";
import Project from "./_component/_Project/project";

export default function Home() {
  return (
    <div className={styles.body}>
      <Nav userName="HanJunseo"/>
      <Profile />
      <Project/>
    </div>
  );
}
