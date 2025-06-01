'use client';
import Link from "next/link";
import styles from '../_style/header.module.css';
import {useState, useEffect} from 'react';

type NavProps = {
    userName: string;
};

function Nav({ userName }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY > 50) {
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
      <div className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>    
          <span className={styles.name}>{userName}</span>
          <div className={styles.nav}>
            <div className={styles.paths}><Link href ='/home'>Home</Link></div>
            <div className={styles.paths}><Link href ='/about'>About</Link></div>
            <div className={styles.paths}><Link href ='/project'>Projects</Link></div>
            <div className={styles.paths}><Link href = '/archiving'>Archiving</Link></div>
          </div>
        </div>
      </div>
        
    )
}

export default Nav;