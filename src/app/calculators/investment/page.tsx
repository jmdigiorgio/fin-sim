'use client';

import { Header } from '@/components/layout/Header';
import { SidePanel } from '@/components/layout/SidePanel';
import styles from "@/app/page.module.css";

export default function InvestmentCalculator() {
  return (
    <div className={styles.page}>
      <SidePanel />
      <Header pageTitle="Investment Calculator" />
      <main className={styles.main}>
        <div className={styles.toolsContainer}>
          <h1 className={styles.toolsHeader}>Investment Calculator</h1>
          {/* Investment calculator component will go here */}
        </div>
      </main>
    </div>
  );
} 