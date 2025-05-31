import Link from "next/link";
import styles from '../_style/header.module.css';

type NavProps = {
    userName: string;
};

function Nav({ userName }: NavProps) {
    return (
        <div className={styles.inner}>    
          <span className={styles.name}>{userName}</span>
          <div className={styles.nav}>
            <div className={styles.paths}><Link href ='/home'>Home</Link></div>
            <div className={styles.paths}><Link href ='/about'>About</Link></div>
            <div className={styles.paths}><Link href ='/project'>Projects</Link></div>
            <div className={styles.paths}><Link href = '/archiving'>Archiving</Link></div>
          </div>
        </div>
    )
}

export default Nav;