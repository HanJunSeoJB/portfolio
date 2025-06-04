'use client';
import Link from "next/link";
import styles from '../_style/header.module.css';
import {useState, useEffect} from 'react';
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
})

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
          <div className={`${styles.nav} ${inter.className}`}>
            <div className={`${styles.paths} ${pathName === '/' ? styles.activePath: ''}`}><Link href ='/' className={inter.className}>Home</Link></div>
            <div className={`${styles.paths} ${pathName === '/about' ? styles.activePath: ''}`}><Link href ='/about' className={inter.className}>About</Link></div>
            <div className={`${styles.paths} ${pathName === '/project' ? styles.activePath: ''}`}><Link href ='/project' className={inter.className}>Projects</Link></div>
            <div className={`${styles.paths} ${pathName === '/archiving' ? styles.activePath: ''}`}><Link href = '/archiving' className={inter.className}>Archiving</Link></div>
          </div>
        </div>
      </div>
        
    )
}

export default Nav;