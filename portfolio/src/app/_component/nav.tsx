'use client';
import Link from "next/link";
import styles from '../_style/header.module.css';
import {useState, useEffect} from 'react';
import { usePathname } from "next/navigation";

type NavProps = {
    userName: string;
};

function Nav({ userName }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName =  usePathname();
  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
    return (
      <div data-testid="header" className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>    
          <span className={styles.name}>{userName}</span>
          <div className={styles.nav}>
            <div className={`${styles.paths} ${pathName === '/' ? styles.activePath: ''}`}><Link href ='/'>Home</Link></div>
            <div className={`${styles.paths} ${pathName === '/about' ? styles.activePath: ''}`}><Link href ='/about'>About</Link></div>
            <div className={`${styles.paths} ${pathName === '/project' ? styles.activePath: ''}`}><Link href ='/project'>Projects</Link></div>
            <div className={`${styles.paths} ${pathName === '/archiving' ? styles.activePath: ''}`}><Link href = '/archiving'>Archiving</Link></div>
          </div>
        </div>
      </div>
        
    )
}

export default Nav;