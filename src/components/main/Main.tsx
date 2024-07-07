import { Component } from 'react';
import styles from './Main.module.css';
import { MainProps } from './Main.props';
import Card from '../card/Card';

class Main extends Component<MainProps> {
  render() {
    const { searchData, loading } = this.props;

    return (
      <main className={styles['main']}>
        {loading ? (
          <div className={styles['loading']}>Loading...</div>
        ) : (
          <ul className={styles['list']}>
            {searchData.length > 0 ? (
              searchData.map((person) => <Card key={person.name} person={person} />)
            ) : (
              <div className={styles['no-data']}>No aviable data</div>
            )}
          </ul>
        )}
      </main>
    );
  }
}

export default Main;
