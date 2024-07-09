import { Component } from 'react';
import style from './Card.module.css';
import { CardProps } from './Card.props';

class Card extends Component<CardProps> {
  render() {
    const { person } = this.props;

    return (
      <li className={style['card']}>
        <h2 className={style['name']}>{person.name}</h2>
        <div className={style['row']}>
          Height: <span>{person.height}</span>
        </div>
        <div className={style['row']}>
          Mass: <span>{person.mass}</span>
        </div>
        <div className={style['row']}>
          Hair Color: <span>{person.hair_color}</span>
        </div>
        <div className={style['row']}>
          Skin Color: <span>{person.skin_color}</span>
        </div>
        <div className={style['row']}>
          Eye Color: <span>{person.eye_color}</span>
        </div>
        <div className={style['row']}>
          Birth Year: <span>{person.birth_year}</span>
        </div>
        <div className={style['row']}>
          Gender: <span>{person.gender}</span>
        </div>
      </li>
    );
  }
}

export default Card;
