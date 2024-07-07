import { Component } from 'react';
import style from './Main.module.css';
import { People } from '../../serviсes/api.props';

interface MainProps {
  searchData: People[];
}

class Main extends Component<MainProps> {
  render() {
    const { searchData } = this.props;

    return (
      <main className={style['main']}>
        <ul className={style['list']}>
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
      </main>
    );
  }
}

export default Main;
