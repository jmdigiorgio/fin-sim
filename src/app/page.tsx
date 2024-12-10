'use client';

import { SidePanel } from '@/components/layout/SidePanel';
import styles from "./page.module.css";
import Link from 'next/link';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Image from 'next/image';
import SavingsIcon from '@mui/icons-material/Savings';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

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
            <h1>Welcome to NestFund</h1>
            <p>
              Your personal finance companion for smarter investment decisions, 
              personal budgeting, and financial planning.
            </p>
            <Image 
              src="/BudgetPlanningByBarsrsind.svg"
              alt="Budget Planning by Barsrsind"
              width={1200}
              height={800}
              className={styles.heroImage}
              priority
            />
          </header>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <SavingsIcon />
              <h3>Smart Investing</h3>
              <p>Make informed investment decisions with our advanced calculators</p>
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
                Explore Investment Calculator
              </Link>
            </div>
            <p className={styles.valueProposition}>
              Most budgeting apps just track your spending. NestFund helps you make smarter financial decisions 
              by focusing on what matters: growing your wealth through informed investment strategies.
            </p>
          </section>

          <section className={styles.featuresSection}>
            <h2>What You Can Do</h2>
            <ol>
              <li>Calculate potential returns on investments with compound interest</li>
              <li>Plan loan payments and mortgage scenarios</li>
              <li>Set and track savings goals</li>
              <li>Optimize credit card payoff strategies</li>
              <li>Make data-driven financial decisions</li>
            </ol>
          </section>
        </article>
      </main>
    </div>
  );
}
