'use client';

import { Header } from '@/components/layout/Header';
import { SidePanel } from '@/components/layout/SidePanel';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <SidePanel />
      <Header />
      <main className={styles.main}>
        {/* Content will go here */}
      </main>
    </div>
  );
}
