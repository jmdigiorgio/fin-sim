'use client';

import { SidePanel } from '@/components/layout/SidePanel';
import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import { Loading } from '@/components/shared/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading fullscreen />;
  }

  return (
    <div className={styles.page}>
      <SidePanel />
      <main className={styles.main}>
        {/* Content will go here */}
      </main>
    </div>
  );
}
