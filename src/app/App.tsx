import { HomePage } from '@pages/index';
import styles from './App.module.css';
import { ThemeProvider } from '@context/index';

function App() {
  return (
    <ThemeProvider>
      <div className={styles['app']}>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
