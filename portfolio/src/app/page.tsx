import styles from "./style/header.module.css";
import nav from "./style/nav.module.css";
import Link from "next/link";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.inner}>  
          <span className={styles.name}>HanJunseo</span>
          <div className={nav.nav}>
            <Link href ='/home'>Home</Link>
            <Link href ='/about'>About</Link>
            <Link href ='/project'>Projects</Link>
            <Link href = '/archiving'>Archiving</Link>
          </div>
        </div>
      </header>
      <h1>Hello admin</h1>
    </div>
  );
}
