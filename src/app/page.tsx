'use client';

import { SidePanel } from '@/components/layout/SidePanel';
import styles from "./page.module.css";
import Link from 'next/link';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Image from 'next/image';
import SavingsIcon from '@mui/icons-material/Savings';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <SidePanel />
      <main className={styles.mainContent}>
        <article className={styles.contentWrapper}>
          <div className={styles.devNotice}>
            <p>
              ⚠️ NestFund is currently under development and not yet ready for public use. 
              Features and functionality are still being implemented.
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

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <SavingsIcon />
              <h3>Manage Everything</h3>
              <p>Keep tabs on your complete financial picture in one place</p>
            </div>
            <div className={styles.benefitCard}>
              <TimelineIcon />
              <h3>Track Progress</h3>
              <p>Monitor your financial goals and achievements</p>
            </div>
            <div className={styles.benefitCard}>
              <TrendingUpIcon />
              <h3>Grow Wealth</h3>
              <p>Optimize your strategy for long-term financial success</p>
            </div>
          </div>

          <section className={styles.ctaSection}>
            <div className={styles.ctas}>
              <Link href="/calculators/return-on-investment" className={styles.primary}>
                <AccountBalanceIcon />
                Explore our Investment Calculator
              </Link>
            </div>
            <p className={styles.valueProposition}>
              Most budgeting apps just track your spending. NestFund brings it all together. NestFund is your personal command center for tracking where you&apos;re at financially and where you&apos;re going.
            </p>
          </section>

          <section className={styles.roadmapSection}>
            <h2>Development Roadmap</h2>
            
            <div className={styles.phasesContainer}>
              <div className={styles.phaseBlock}>
                <h3>Current Phase</h3>
                <h4>Foundation</h4>
                <ul>
                  <li>🏗️ Useful and totally free calculators for everyday finance (no account required)</li>
                  <li>🏗️ Basic user interface & user experience</li>
                </ul>
              </div>

              <div className={styles.phaseBlock}>
                <h3>Next Phase</h3>
                <h4>Infrastructure</h4>
                <ul>
                  <li>📅 Budget & expense tracking</li>
                  <li>📅 Database hookups</li>
                  <li>📅 User accounts</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
