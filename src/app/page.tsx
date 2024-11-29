'use client';

import { MenuItem } from '@mui/material';
import { Dropdown } from '@/components/Dropdown';
import { MoneyInput } from '@/components/MoneyInput';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useState } from 'react';
import styles from "./page.module.css";
import Image from 'next/image';

export default function Home() {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [recurringInvestment, setRecurringInvestment] = useState('');

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
        <div className={styles.dropdownContainer}>
          <span className={styles.dropdownLabel}>With an initial investment of</span>
          <MoneyInput 
            value={initialInvestment}
            onChange={setInitialInvestment}
          />
          <span className={styles.dropdownLabel}>and a</span>
          <Dropdown label="Select Option" defaultValue={10}>
            <MenuItem value={10}>Annual</MenuItem>
            <MenuItem value={20}>Semiannual</MenuItem>
            <MenuItem value={30}>Quarterly</MenuItem>
            <MenuItem value={40}>Monthly</MenuItem>
            <MenuItem value={50}>Weekly</MenuItem>
            <MenuItem value={60}>Daily</MenuItem>
            <MenuItem value={70}>Continuously</MenuItem>
          </Dropdown>
          <span className={styles.dropdownLabel}>recurring investment of</span>
          <MoneyInput 
            value={recurringInvestment}
            onChange={setRecurringInvestment}
          />
          <span className={styles.dropdownLabel}>, after</span>
        </div>
      </main>
    </div>
  );
}
