'use client';

import { SidePanel } from '@/components/layout/SidePanel';
import styles from "./page.module.css";
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <SidePanel />
      <main className={styles.mainContent}>
        <article className={styles.contentWrapper}>
          <div className={styles.devNotice}>
            <p>
              ⚠️ NestFund is currently under construction. Current feature in development: Tables for expense tracking.
            </p>
          </div>
          <header className={styles.heroSection}>
            <div className={styles.welcomeContainer}>
              <h1>Welcome to</h1>
              <Image 
                src={useTheme().palette.mode === 'dark' 
                  ? '/nest-fund-logos/nest-fund-v1-dark.svg'
                  : '/nest-fund-logos/nest-fund-v1-light.svg'}
                alt="NestFund"
                width={200}
                height={200}
                className={styles.heroImage}
                priority
              />
            </div>
            <p>
              Your personal finance companion for smarter investment decisions, 
              personal budgeting, and financial planning.
            </p>
            <Image 
              src="/BudgetPlanningByBarsrsind.svg"
              alt="Budget Planning by Barsrsind"
              width={1200}
              height={800}
              className={styles.illustrationImage}
              priority
            />
          </header>
        </article>
      </main>
    </div>
  );
}
