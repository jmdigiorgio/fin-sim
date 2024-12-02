'use client';

import { Header } from '@/components/Header';
import { ReturnCalc } from '@/components/ReturnCalc';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ReturnCalc />
      </main>
    </div>
  );
}
