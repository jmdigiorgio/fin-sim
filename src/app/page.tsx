'use client';

import { Button, MenuItem } from '@mui/material';
import { Dropdown } from '@/components/Dropdown';
import { ThemeToggle } from '@/components/ThemeToggle';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>
      <main className={styles.main}>
        <Dropdown label="Select Option" defaultValue={10}>
          <MenuItem value={10}>Annually</MenuItem>
          <MenuItem value={20}>Semiannually</MenuItem>
          <MenuItem value={30}>Quarterly</MenuItem>
          <MenuItem value={40}>Monthly</MenuItem>
          <MenuItem value={50}>Weekly</MenuItem>
          <MenuItem value={60}>Daily</MenuItem>
          <MenuItem value={70}>Continuously</MenuItem>
        </Dropdown>
      </main>
    </div>
  );
}
