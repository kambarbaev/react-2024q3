import React from 'react';
import styles from './App.module.css';
import { Header } from './components';

class App extends React.Component {
  render() {
    return (
      <div className={styles['app']}>
        <Header />
      </div>
    );
  }
}

export default App;
