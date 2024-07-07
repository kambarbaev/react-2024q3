import { Component } from 'react';
import style from './Main.module.css';
import { MainProps } from './Main.props';

class Main extends Component<MainProps> {
  render() {
    const { searchData, loading } = this.props;

    return (
      <main className={style['main']}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {searchData.length > 0 ? (
              searchData.map((person, index) => (
                <li key={index} className={style['card']}>
                  {person.name}
                </li>
              ))
            ) : (
              <li className={style['card']}>{'No data available'}</li>
            )}
          </ul>
        )}
      </main>
    );
  }
}

export default Main;
