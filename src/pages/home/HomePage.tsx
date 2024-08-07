import { Outlet } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme/useTheme';
import { Header, Main } from '@components/index';
import styles from './HomePage.module.css';

function HomePage() {
  const { theme } = useTheme();

  return (
    <div className={`${styles['homepage']} ${theme === 'light' ? '' : styles['dark']}`}>
      <div className={styles['container']}>
        <aside>
          <Header />
          <Main />
        </aside>
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
