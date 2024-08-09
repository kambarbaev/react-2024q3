import { HomePage } from '@pages/index';
import styles from './App.module.css';
import { ThemeProvider } from '@context/index';
import { Notify } from '@components/index';

function App() {
  return (
    <ThemeProvider>
      <div className={styles['app']}>
        <HomePage />
        <Notify />
      </div>
    </ThemeProvider>
  );
}

export default App;
