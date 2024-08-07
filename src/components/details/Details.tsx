import { useParams } from 'react-router-dom';
import { People } from '@services/index';
import styles from './Details.module.css';
import { useTheme } from '@hooks/useTheme/useTheme';
import { useGetPersonQuery } from '@services/api/newApi';

function Details() {
  const { theme } = useTheme();
  const { id } = useParams();

  const { data, isLoading, isError } = useGetPersonQuery(id!);

  const person: People | undefined = data;

  return (
    <div className={styles['details']}>
      {isLoading ? (
        <div className={`${styles['loading']} ${theme === 'light' ? '' : styles['dark']}`}>Loading...</div>
      ) : isError ? (
        <div className={`${styles['error']} ${theme === 'light' ? '' : styles['dark']}`}>No available data</div>
      ) : (
        person && (
          <div className={styles['description']}>
            <h2 className={styles['name']}>{person.name}</h2>
            <div className={styles['row']}>
              Height: <span>{person.height}</span>
            </div>
            <div className={styles['row']}>
              Mass: <span>{person.mass}</span>
            </div>
            <div className={styles['row']}>
              Hair Color: <span>{person.hair_color}</span>
            </div>
            <div className={styles['row']}>
              Skin Color: <span>{person.skin_color}</span>
            </div>
            <div className={styles['row']}>
              Eye Color: <span>{person.eye_color}</span>
            </div>
            <div className={styles['row']}>
              Birth Year: <span>{person.birth_year}</span>
            </div>
            <div className={styles['row']}>
              Gender: <span>{person.gender}</span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Details;
