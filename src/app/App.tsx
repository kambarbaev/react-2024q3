import styles from './App.module.css';
import { HomePage } from '../pages';

function App() {
  return (
    <div className={styles['app']}>
      <HomePage />
    </div>
  );
}

export default App;
