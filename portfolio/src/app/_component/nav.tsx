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
            <li><Link href ='/home'>Home</Link></li>
            <li><Link href ='/about'>About</Link></li>
            <li><Link href ='/project'>Projects</Link></li>
            <li><Link href = '/archiving'>Archiving</Link></li>
          </div>
        </div>
    )
}

export default Nav;