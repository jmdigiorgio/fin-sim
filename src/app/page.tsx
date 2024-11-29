'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import { ReturnCalc } from '@/components/ReturnCalc';
import styles from "./page.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/favicon/logo-500x500.png"
            alt="MockVest Logo"
            width={40}
            height={40}
            className={styles.logo}
          />
          <span className={styles.appName}>MockVest</span>
        </div>
      </header>
      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>
      <main className={styles.main}>
        <ReturnCalc />
      </main>
    </div>
  );
}
