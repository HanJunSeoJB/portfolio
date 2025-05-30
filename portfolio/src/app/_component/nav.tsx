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
            <Link href ='/home'>Home</Link>
            <Link href ='/about'>About</Link>
            <Link href ='/project'>Projects</Link>
            <Link href = '/archiving'>Archiving</Link>
          </div>
        </div>
    )
}

export default Nav;