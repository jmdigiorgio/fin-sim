import { Button } from '@mui/material';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button variant="contained" color="primary">
          MUI Button
        </Button>
      </main>
    </div>
  );
}
