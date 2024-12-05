'use client';

import { Header } from '@/components/layout/Header';
import { SidePanel } from '@/components/layout/SidePanel';
import styles from "@/app/page.module.css";

export default function Calculators() {
  return (
    <div className={styles.page}>
      <SidePanel />
      <Header pageTitle="Calculators" />
      <main className={styles.main}>
        <div className={styles.toolsContainer}>
          <h1 className={styles.toolsHeader}>Calculators</h1>
          {/* Content will go here */}
        </div>
      </main>
    </div>
  );
} 